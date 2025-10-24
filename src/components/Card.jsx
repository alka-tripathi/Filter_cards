import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { FaHeart } from 'react-icons/fa';

import { FaRegHeart } from 'react-icons/fa';
import './Card.css';
import { toast } from 'react-toastify';

export default function Card(props) {
  //for heart icon
  let data = props.data;
  //let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;
  let [notRed, setRedHeart] = useState(false);
  function clickHandler() {
    //logic

    //unlike logic
    if (likedCourse.includes(data.id)) {
      //phele se liked hai
      setLikedCourse((prev) => prev.filter((cid) => cid !== data.id));
      setRedHeart(false);
      toast.warning('Like Remove');
    } else {
      //phele se like nai hai
      //insert kro likedCoursesarray mai
      if (setLikedCourse.length == 0) {
        setLikedCourse([data.id]);
      } else {
        //non -empty phele se
        setLikedCourse((prev) => [...prev, data.id]);
      }
      setRedHeart(true);
      toast.success('Liked Successfully');
    }
  }
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
          {likedCourse.includes(data.id) ? (
            <FaHeart style={{ color: 'red' }} />
          ) : (
            <FaRegHeart style={{ color: 'gray' }} />
          )}
        </button>
        <h2>{data.title}</h2>
        <h4>{data.description}</h4>
      </div>
    </div>
  );
}
