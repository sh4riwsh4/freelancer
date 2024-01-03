package com.example.freelance.demo.start.service.concretes;

import com.example.freelance.demo.start.DAO.UserRepository;
import com.example.freelance.demo.start.dto.CreateUserRequest;
import com.example.freelance.demo.start.entitiy.User;
import com.example.freelance.demo.start.mernis.RHOKPSPublicSoap;
import com.example.freelance.demo.start.service.abstracts.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder){
        this.userRepository=userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(int id) {
        Optional<User> result= userRepository.findById(id);
        User user=null;
        user=result.get();
        return user;
    }

    @Override
    public void deleteById(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByFirstName(String Name) {
        return userRepository.getUserByFirstName(Name);
    }

    public User getByUserName(String userName){
        return userRepository.findByUsername(userName);
    }
    public String createUser(CreateUserRequest request) throws Exception {
        RHOKPSPublicSoap client = new RHOKPSPublicSoap();


            long identityNumber = Long.parseLong(request.identityNumber());
            boolean isRealUser = client.TCKimlikNoDogrula(identityNumber, request.firstName(), request.lastName(), request.age());

            if (isRealUser) {
                User newUser = User.builder()
                        .firstName(request.firstName())
                        .lastName(request.lastName())
                        .wallet(request.wallet())
                        .location(request.location())
                        .email(request.email())
                        .age(request.age())
                        .identityNumber(request.identityNumber())
                        .username(request.username())
                        .password(passwordEncoder.encode(request.password()))
                        .authorities(request.authorities())
                        .accountNonExpired(true)
                        .credentialsNonExpired(true)
                        .isEnabled(true)
                        .accountNonLocked(true)
                        .build();
                System.out.println("kullanıcı eklendi" + newUser.getAuthorities());
                userRepository.save(newUser);
                return String.valueOf(userRepository.save(newUser));
            }
            return null;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }
}