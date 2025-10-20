// import { useState } from 'react';
// import './App.css';
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';

import filterData from '../FilterData.js';

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterdata={filterData}></Filter>{' '}
        {/* here filterdata is as array we are passing an aaray */}
      </div>
      <div>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
