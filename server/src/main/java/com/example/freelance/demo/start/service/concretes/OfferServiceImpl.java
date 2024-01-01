package com.example.freelance.demo.start.service.concretes;

import com.example.freelance.demo.start.DAO.OfferRepository;
import com.example.freelance.demo.start.entitiy.Offers;
import com.example.freelance.demo.start.gerekli.OfferStatus;
import com.example.freelance.demo.start.service.abstracts.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OfferServiceImpl implements OfferService {
    private OfferRepository offerRepository;
    @Autowired
    public OfferServiceImpl(OfferRepository offerRepository){
        this.offerRepository=offerRepository;
    }
    @Override
    public Offers createOffer(Offers offers) {
        return offerRepository.save(offers);
    }

    @Override
    public void acceptOffer(int offerId) {
        Offers offers = offerRepository.findById(offerId);
        offers.setOfferStatus(OfferStatus.accepted);
        offerRepository.save(offers);
    }

    @Override
    public void rejectOffer(int offerId) {
        Offers offers = offerRepository.findById(offerId);
        offers.setOfferStatus(OfferStatus.rejected);
        offerRepository.save(offers);
    }

    @Override
    public List<Offers> getOffersForJob(int jobId) {
        return  offerRepository.findByJobId(jobId);
    }
}
