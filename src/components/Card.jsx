import React from 'react';
import { FcLike } from 'react-icons/fc';

export default function Card(props) {
  let cardData = props.data;
  console.log(cardData.image.url);

  return (
    <div>
      <div>
        <img
          src={cardData?.image?.url}
          alt={cardData?.title}
        />

        <div>
          <button>
            <FcLike></FcLike>
          </button>
          <div>
            <h2>{cardData.title}</h2>
            <h4>{cardData.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
