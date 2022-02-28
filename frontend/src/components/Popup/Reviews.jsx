import React, { useEffect, useState } from "react";
import Reaction0 from "../../assets/img/notgood.png";
import Reaction1 from "../../assets/img/goodimg.png";
import Reaction2 from "../../assets/img/verygood.png";
import Reaction3 from "../../assets/img/excellent.png";
import Cross from "../../assets/img/cross.svg";
import API from "../../API";

const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews(selectedItemId).then((reviews) => {
      setSelectedItemId(null);
      setReviews(reviews);
    });
  }, []);

  const getImgReaction = (like_count) => {
    switch (like_count) {
      case 1:
        return Reaction1;
      case 2:
        return Reaction2;
      case 3:
        return Reaction3;
      default:
        return Reaction0;
    }
  };

  return (
    <section class="popup1">
      <div class="popup-content">
        <div class="inter">
          <div className="close">
            <img
              src={Cross}
              onClick={() => setShowReviews(false)}
              class="cross"
              alt=""
            />
          </div>
          <div className="review-heading">
            <h2>Reviews</h2>
          </div>
          <div class="reviews">
            {reviews &&
              reviews.map((review) => (
                <div className="user-reaction">
                  <img src={getImgReaction(review.like_count)} alt="" />
                  <div class="name">{review.name}</div>
                  <div class="body">{review.body}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
