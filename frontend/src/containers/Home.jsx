import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import queryString from "query-string";
//import { fetchFromLocalStorage } from "../reducks/carts/operations";
import line from "../assets/img/line.png";
import { push } from "connected-react-router";
import {fetchCarts} from "../reducks/carts/operations"

const Home = () => {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  // useEffect(() => {
  //   dispatch(fetchFromLocalStorage());
  //   dispatch(fetchItems(parsed.category));
  // }, []);
  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
    }
  }, []);

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }

    return (
      <div className="items">
        <Item
          key={item.id}
          item={item}
          selected_count={selected_count}
          setShowWriteReview={setShowWriteReview}
          setShowReviews={setShowReviews}
          setSelectedItemId={setSelectedItemId}
        />
      </div>
    );
  };

  return (
    <div class="home">
      <Header />

      <section class="content">
        {showCartList ? (
          <>
            <h1>Selected Items</h1>
            <p>Please show this page to the waiter.</p>
          </>
        ) : (
          <>
            <div className="popular">
              <p class="heading">Our Most Popular Recipes</p>
              <img class="line" src={line} alt="" />
              <p class="paragraph">
                Try our Most Delicious food and it usually take minutes to
                deliver!
              </p>
            </div>
            <div div class="hot-links">
              <div class="button">
                <a className="text" href="/">
                  All
                </a>
              </div>
              <div class="button">
                <a className="text" href="/?category=cold">
                  Cold
                </a>
              </div>
              <div class="button">
                <a className="text" href="/?category=hot">
                  Hot
                </a>
              </div>
              <div class="button" id="yellowbutton">
                <a className="text" id="bagel" href="/?category=bagel">
                  Bagel
                </a>
              </div>
            </div>
          </>
        )}
        <div class="item-container">
          {items && items.map((item) => showItem(item))}
        </div>
      </section>

      <Footer
        price={subtotal}
        showCartList={showCartList}
        setShowCartList={setShowCartList}
      />

      {showWriteReview && (
        <PopupWriteRevew
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowWriteReview={setShowWriteReview}
        />
      )}
      {showReviews && (
        <PopupRevews
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowReviews={setShowReviews}
        />
      )}
    </div>
  );
};

export default Home;
