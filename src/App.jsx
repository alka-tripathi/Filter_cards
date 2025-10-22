import { useState, useEffect } from 'react';
// import './App.css';
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';
import Spinner from './components/Spinner.jsx';
import { toast } from 'react-toastify';

import filterData, { apiUrl } from '../FilterData.js';

function App() {
  let [course, setCourse] = useState(null);
  let [loading, setLoading] = useState(true);

  async function fetchdata() {
    setLoading(true); //dikhao spinner ko
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourse(output.data);
    } catch (err) {
      toast.err('network mai problem hai');
    }
    setLoading(false); //jaise data fetch ho gya hai vaise hi spinner ko chuppa do
  }

  //first rendering time fetch data ko call kro
  useEffect(() => {
    fetchdata();
  }, []);
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
        {/* loading or cards with data*/}
        {loading ? <Spinner></Spinner> : <Cards courses={course}></Cards>}
      </div>
    </div>
  );
}

export default App;
