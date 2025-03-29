import React from 'react';

function OpenAccount() {
  return (
    <div className="container p-5 mb-3">
      <div className="row text-center">
        {/* <h1 className="mt-5 "> Pricing</h1>
        <p className='text-muted fs-4'>Free equity investments and flat ₹20 traday and F&O trades
        </p> */}
        <div className='row p-5 '>
          <div className='col-4 p-2 '>
            <img src='media/pricing0.svg'  style={{width:"250px"}} />
            <h2 className='mt-3'>Free equity delivery </h2>
            <p className='text-muted mt-4  ' style={{fontSize:"18px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-4 p-2'>
            <img src='media/intradayTrades.svg' style={{width:"250px"}} />
            <h2 className='mt-3'>Intraday and F&O trades </h2>
            <p  style={{fontSize:"18px"}} className='text-muted mt-4' p-1>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-4 p-2'>
            <img src='media/pricing0.svg'  style={{width:"250px"}}/>
            <h2 className='mt-3'>
              Free direct MF </h2>
            <p style={{fontSize:"18px"}} className='text-muted mt-4 p-1' >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
        <div className="row text-center">
        <h1 className="mt-5 mx-5 text-center "> Open a Zerodha account</h1>
        <p className=' justify-content-center text-center text-muted fs-4 mx-5 mt-2'>Modern platforms and apps,₹0  investments and flat ₹20 traday and F&O trades
        </p>
        <div className="d-flex justify-content-center mt-3 mx-5">
                <button 
                    style={{ 
                        backgroundColor: "#2196F3",
                        width: "200px",
                        height: "50px",
                        border: "none",
                        color: "white",
                        borderRadius: "5px"
                    }}
                >
                    Sign Up for free
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default OpenAccount;