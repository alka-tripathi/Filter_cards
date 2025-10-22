import React from 'react';
import Card from './Card.jsx';
export default function Cards(props) {
  let courses = props.courses;
  // console.log(courses);

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
    <div>
      {getCourses().map((course) => {
        <Card
          key={course.id}
          course={course}
        ></Card>;
      })}
    </div>
  );
}
