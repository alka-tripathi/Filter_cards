import React from 'react';
import { FcLike } from 'react-icons/fc';

import { FaRegHeart } from 'react-icons/fa';
import './Card.css';

export default function Card({ data }) {
  function clickHandler() {}
  return (
    <div className="card">
      <img
        src={data?.image?.url}
        alt={data?.title}
      />
      <div className="card-content">
        <button
          className="like-btn"
          onClick={clickHandler}
        >
          {/* <FcLike /> */}
          <FaRegHeart />
        </button>
        <h2>{data.title}</h2>
        <h4>{data.description}</h4>
      </div>
    </div>
  );
}
