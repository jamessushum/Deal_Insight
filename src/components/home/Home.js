import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="home__container">
      <div className="home__top">
        <img src={require("./nyc.jpg")} alt="" className="home__image" />
        <div className="home__imageText">
          <h3>Manage your deal pipeline. Stay up to date with the market.</h3>
        </div>
      </div>
      <div className="home__bottom">

      </div>
    </div>
  )
}

export default Home;