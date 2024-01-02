package com.example.freelance.demo.start.entitiy;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Table(name = "user_profiles")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "age")
    private Integer age;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "biyografi")
    private String Biyografi;

    // Diğer ilgili alanlar...

    // Getter ve Setter metotları...

}
