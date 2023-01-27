import React, { useState } from 'react';
import './Games.css';
import allGames from './Allapi/allgamesapi';

const uniqueCategory = [
  ...new Set(allGames.map((curEle)=>{
    return curEle.gamecategory;
  })
  ),
  "All",
];

const Games = () => {

  const [myGames, setMyGames] = useState(allGames);
  const [uniqueList] = useState(uniqueCategory);

  const filterItems = (curCategory) =>{
    if(curCategory === "All"){
      setMyGames(allGames);
      return;
    }

    const updatedCategory = allGames.filter((curEle)=>{
      return curEle.gamecategory === curCategory;
    })

    setMyGames(updatedCategory);
  }


  return (
    <>
      <section className='common-page-section game-page'>
        <div className='common-page-head common-animation'>
          <h2>Our featured games</h2>
        </div>
      </section>

      <section className='games-container section'>

      <div className='game-nav-section'>
            <div className='game-nav'>
              {
                uniqueList.map((curEle,index)=>{
                  return <button key={index} onClick={()=> filterItems(curEle)}>{curEle}</button>
                })
              }
              
            </div>
          </div>

        <div className='games-section grid-container'>

          {
            myGames.map((curEle, index) => {
              return (
                <div className='games-col' key={curEle.id}>
                  <img src={curEle.gameimage} alt="gameImage" />
                  <span className='category-label'>{curEle.gamecategory}</span>
                  <div className='about-game'>
                    <h2>{curEle.gamehead}</h2>
                    <div className='game-description'>
                      <p>{curEle.gamedesc}</p>
                      <button className='game-buy-btn btn'>Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
          
      </section>
    </>
  )
}

export default Games;