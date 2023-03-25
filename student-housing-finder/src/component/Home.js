// import logo from './logo.svg';
// import './App.css';
import './Home.css';
import Detail from './Detail';
import Apply from './Apply';
import ListItem from './ListItem'

import Listings from '../data/listings.json';
import React, { useState } from "react";
function Home() {

  const [message, setMessage] = useState("");

  const [page, setPage] = useState("");

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  function showMessage(mykey) {
    setMessage(mykey);
  }
  function setP(p) {
    setPage(p);
  }

  function back() {
    setMessage("");
    setPage("home");
  }

  let mm;

  if (message === "") {
    mm =

      <>

        <input type="text" placeholder='Search' onChange={(e) => { setSearch(e.target.value) }}></input>

        <label for="location"> &nbsp;&nbsp;&nbsp;&nbsp; Select a location :  &nbsp;</label>

        <select name="location" id="location" onChange={(e) => { setFilter(e.target.value) }}>
          <option value="All">All</option>
          <option value="Ottawa">Ottawa</option>
          <option value="Toronto">Toronto</option>
          <option value="Calgary">Calgary</option>
          <option value="Montreal">Montreal</option>
        </select>
        <p>{message}</p>

        {Listings.filter((item, index) => filter != "All" ? item.location.includes( filter) : true)
          .filter((item, index) => search != "" ? item.title.includes(search) : true)
          .map((listing, key) =>
            <ListItem showMessage={showMessage} key={key} mykey={listing.id} title={listing.title}
              description={listing.description} photoUrl={listing.photoUrl}
              location={listing.location}></ListItem>)
        }

      </>
  } else if (page === "apply") {
    mm = (<div>
      <button onClick={back} class="btn"><span>Go back</span></button>
      <Apply setP={setP} id={message}></Apply></div>)
  }
  else {

    mm = (<><button onClick={back} class="btn"><span>Go back</span></button><Detail setP={setP} id={message}></Detail></>)
  }
  return (
    <div className="Home">

      <div style={{ padding: "8px" }}>
        <h1>Student Housing Finder</h1>
      </div>
      <div>

        {mm}

      </div>




    </div>
  );
}

export default Home;
