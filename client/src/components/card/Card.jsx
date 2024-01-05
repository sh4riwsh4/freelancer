import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ item }) => {
  return (
    <Link to={`/job/${item.id}`} className="link">
      <div className="job-card">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
        <div className="job-info">
          <div className="job-user">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
            <span>{item.title}</span>
          </div>
          <p>{item.description}</p>
          <div className="job-detail">
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
          <div className="job-price">
            <h2>
              {item.price} TL
              <sup>99</sup>
            </h2>
          </div>
        </div>
        </div>
        <hr />
      </div>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;