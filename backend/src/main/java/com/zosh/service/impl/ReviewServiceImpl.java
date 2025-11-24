package com.zosh.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zosh.model.Product;
import com.zosh.model.Review;
import com.zosh.model.User;
import com.zosh.repository.ReviewRepository;
import com.zosh.request.CreateReviewRequest;
import com.zosh.service.ReviewService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final ReviewRepository reviewRepository;

    @Override
    public Review createReview(CreateReviewRequest req, User user, Product product) {
       Review review = new Review();
       review.setUser(user);
       review.setProduct(product);
       review.setReviewText(req.getReviewText());
       review.setRatings(req.getReviewRating());
       review.setProductImages(req.getProductImages());

       product.getReviews().add(review);
       return reviewRepository.save(review);

    }

    @Override
    public List<Review> getReviewByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }

    @Override
    public Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception{
        Review review=getReviewById(reviewId);

        if(review.getUser().getId().equals(userId)){
            review.setReviewText(reviewText);
            review.setRatings(rating);
            return reviewRepository.save(review);
        }
        throw new Exception("You Can't Update This Review !!!");
    }

    @Override
    public void deleteReview(Long reviewId, Long userId)throws Exception {
        Review review=getReviewById(reviewId);
        if(review.getUser().getId().equals(userId)){
            throw new Exception("You Can't Delete This Review !!!");
        }
        reviewRepository.delete(review);
    }

    @Override
    public Review getReviewById(Long reviewId)throws Exception {
       return reviewRepository.findById(reviewId).orElseThrow(()->
          new Exception("Review not found !!!"));
    }

}
