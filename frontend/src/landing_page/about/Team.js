import React from "react";

const Team = () => {
  return (
    <div className="container border-top">
      <div className="row">
        <h1 className="fs-2 text-center mt-5 ">
          People
        </h1>
      </div>
      <div className="row p-5 text-muted text-center">
        <div className="col-6 text-center" >
             <img  style={{ borderRadius:"100% " , width:"60%" }} src="media/nithinKamath.jpg"></img>
             <h4 className="mt-5">Nithin Kamath</h4>
             <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-5 " style={{ fontSize: "115%" }}>
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br />
          </p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
          </p>
          <p>
          Playing basketball is his zen.
            <br />
          </p>
          <p className="" >
          Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
