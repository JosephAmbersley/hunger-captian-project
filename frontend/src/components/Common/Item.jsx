import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgIconHeart from "../../assets/img/heart-icon.png";
import cart from "../../assets/img/cart-icon.svg";

import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts } from "../../reducks/carts/selectors";
import {push} from "connected-react-router"

const Item = ({
  item,
  selected_count,
  setShowWriteReview,
  setShowReviews,
  setSelectedItemId,
}) => {
  const selector = useSelector((state) => state);
  const key = localStorage.getItem("LOGIN_USER_KEY");
  
  const [particularCart, setParticularCart] = useState(null);
  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      console.log("carts");
      console.log(carts);
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      console.log("matchedCarts");
      console.log(matchedCarts);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, []);
  const carts = getCarts(selector);
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(setSelectedItemId.item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(setSelectedItemId.item));
  };
  const clickCheckReviews = () => {
    setSelectedItemId(item.id);
    setShowReviews(true);
  };
  const clickWriteReview = () => {
    setSelectedItemId(item.id);
    setShowWriteReview(true);
  };
  return (
    <>
      <div class="item">
        <div class="menu">
          <div className="item-image" >
          <img class="img1" src={item.image} alt="image" />
          </div>
          <div class="likes">
            <img class="hearticon" src={ImgIconHeart} alt="" />
            <p class="likescount">{item.total_like_count}</p>
          </div>
          <div className="name">
            <p>{item.name}</p>
          </div>
          <div className="reviewbox">
            <p class="review" onClick={() => clickWriteReview()}>
              Write Reviews{" "}
            </p>
            <p class="review" onClick={() => clickCheckReviews()}>
              Read Reviews
            </p>
          </div>
          {selected_count == 0 ? (
            <div class="cartbutton">
              <img onClick={clickAddCart} src={cart} alt="" />
            </div>
          ) : (
            <div class="number-1">
              <div class="number">
                <span class="minus" onClick={clickMinusCart}>
                  －
                </span>
                <span class="count">{selected_count}</span>
                <span class="plus" onClick={clickPlusCart}>
                  +
                </span>
              </div>
            </div>
          )}
          <p class="price">{item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
