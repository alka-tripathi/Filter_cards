import React, { useState } from 'react';
import Card from './Card.jsx';
import './Cards.css';
export default function Cards(props) {
  let courses = props.courses;
  // console.log(courses);
  const [likedCourses, setLikedCourses] = useState([]); //no liked courses

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }

  return (
    <div className="cards-container">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            data={course}
            likedCourse={likedCourses}
            setLikedCourse={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
}
