import React, { useState } from 'react';
import Axios from 'axios';



export default function SearchBox(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // props.history.push(`/search/name/${name}`);

    // const { searchText } = this.state;
    const data = {
      searchText: name
    };

    function myFunction() {
      alert("Please wait around 30 seconds while we webscrape the ecommerce websites! Click ok to start scraping!")
      setTimeout(() => props.history.push(`/search/name/${name}`), 35000)
    }

    Axios.post('/api/search', { data })
    .then(() => myFunction())

  
  }
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
