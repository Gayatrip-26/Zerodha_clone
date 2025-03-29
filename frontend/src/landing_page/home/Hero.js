import React from 'react';

function Hero() {
  return (
    <div className='container p-5 mb-3'>
      <div className='row text-center ' style={{alignContent:"center"}}>
          <img src='media/homeHero.png' alt='Hero Image' className='mb-5 p-60  ' style={{width:'100%',alignContent: 'center'}}/>
          <h1 className='mt-5 ml-80'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives,mutual funds, and more</p>
          <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>

    </div>
  );
}
export default Hero;

