import React from 'react';

export default function Filter(props) {
  let filterData = props.filterdata;
  return (
    <div className="filter-container">
      {filterData.map((data) => (
        <button key={data.id} className="filter-btn">{data.title}</button>
      ))}
    </div>
  );
}

//how extactly props looks like
// props = {
//   filterdata: [ {id:'1', title:'All'}, {id:'2', title:'Development'}, ... ]
// }
