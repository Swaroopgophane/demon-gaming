import React from 'react';
import './Home.css';


import arriavalApi from './Allapi/newarrivalapi';
import trendingGames from './Allapi/trendinggameapi';

const Home = () => {
  return (
    <>
      <main className='main-section'>
        <div className='main-inner common-animation'>
          <h1>Welcome To <span className='main-label'>Demon</span> Gaming</h1>
          <h2>The Best Games Out There</h2>
          <button className='main-btn btn'>Explore More</button>
        </div>
      </main>

      <section className='new-arriaval section'>
        <div className='common-heading'>
          <h2>New Arrivals</h2>
        </div>
        <div className='arrival-container grid-container'>
          {
            arriavalApi.map((curEle, index) => {
              return (
                <div className='arrival-col' key={index}>
                  <img src={curEle.image} alt="" />
                  <div className='arrival-info'>
                    <h2><a href="/about">{curEle.heading}</a></h2>
                    <p>{curEle.info}</p>
                    <button className='btn'>Check it now</button>
                  </div>
                </div>
              );
            })
          }


        </div>
      </section>


<section className='trailer-container section'>
          <div className='video-section'>
            <img src="images/elex-game-artwork-5k-on.jpg" alt="" />
            <div className='video-play'>
              <div className='video-info'>
              <h2>Assassin's Creed Mirage Official<br></br> Announcement Trailer | Ubisoft </h2>
              <a href="https://www.youtube.com/watch?v=BhCYK72t6Xc&t=3s" target="blank"><img src="images/play.png" alt="" /></a>
              </div>
            </div>
          </div>
</section>


<section className='trending section'>
<div className='common-heading'>
          <h2>Trending Now</h2>
        </div>
    <div className='trending-section grid-container'>
      {
        trendingGames.map((curEle, index)=>{
          return(
            <div className='trainding-col' key={index}>
          <img src={curEle.image} alt="trnding" />
          <div className='trending-game-info'>
          <h2>{curEle.heading}</h2>
          <p>{curEle.desc}</p>
          <button className='btn'>Buy Now</button>
          </div>
      </div>
          );
        })
      }

    </div>
</section>

<section className='subscribe-container'>
      <div className='subs-section'>
        <h2>Subcribe to our upcoming tournaments</h2>
          <form action="" className='subs-form'>
            <input type="email" placeholder='Enter Email Address' required />
            <div className='subs-btn'>
              <button className='btn'>Subscribe</button>
            </div>
          </form>
      </div>
</section>


<section className='tournament-section section'>
<div className='common-heading'>
          <h2>Tournaments</h2>
        </div>
<div className='tournament-container grid-container'>
  <div className='tournament-col'>
     <div className='tour-img'>
      <img src="images/halo-4.jpg" alt="" />
     </div>
     <div className='tour-info'>
      <h2>Halo-4</h2>
      <p><span>Tournament Beggins:</span> Jan 30,2023</p>
      <p><span>Tounament Ends:</span>  Feb 04, 2023</p>
      <p><span>Participants:</span>  10 teams</p>
      <p><span>Tournament Author:</span>  Admin</p><br></br>
      <p><span>Prizes:</span>  1st place ₹5000, 2nd place: ₹3000, 3rd place: ₹1000</p>

      <button className='btn'>Participate Now</button>
      </div> 
  </div>
  <div className='tournament-col'>
     <div className='tour-img'>
      <img src="images/Hd-gaming-high-wallpaper.jpg" alt="" />
     </div>
     <div className='tour-info'>
      <h2>God Of War</h2>
      <p><span>Tournament Beggins:</span> Feb 05,2023</p>
      <p><span>Tounament Ends:</span>  Feb 15, 2023</p>
      <p><span>Participants:</span>  10 teams</p>
      <p><span>Tournament Author:</span>  Admin</p><br></br>
      <p><span>Prizes:</span>  1st place ₹6000, 2nd place: ₹4000, 3rd place: ₹2000</p>

      <button className='btn'>Participate Now</button>
      </div> 
  </div>
</div>
</section>

    </>
  )
}

export default Home;