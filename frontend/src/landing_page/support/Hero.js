import React from "react";

const Hero = () => {
  return (
  <div className="container">
    <div className="row mt-5 p-5 text-muted">
      <div className="col-7 p-5 " style={{ fontSize: "115%", backgroundColor:"rgb(53, 126, 215)"}}>
        <h4 style={{color:"white"}}>Support Portal</h4>
        <br/><br/>
        <h3 style={{color:"white"}}>Search for an answer or browser help topics <br/>to create a ticket</h3>
        
        <br/>
        <button style={{backgroundColor: "white" , border:"white", borderRadius: "8px",height:"75px" , width:"560px"}}> Eg. how do i activate F&O,why is my order getting rejected.</button>
        <br/><br/>
        <a href="" style={{color:"white"}}>Track account opening</a>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style={{color:"white"}}> Intraday, <br/>margin</a>
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style={{color:"white"}}>Kite user manual</a>
      </div>
      
      <div className="col-5 p-5 " style={{ fontSize: "115%",backgroundColor:"rgb(53, 126, 215)"}}>
       <a className="mx-5"></a> 
       <a className="mx-5"></a> <a className="mx-2"></a> 
       <a className=" mx-5 " href="" style={{color:"white",}}>Track Tickets</a>
       <br/><br/><br/>
       <h3 style={{color:"white"}} >Featured</h3>
       <div style={{color:"white"}}>
       1.<a href="" style={{color:"white"}}>Current Takeovers and Delisting -January 2024</a><br/><br/>
       2.<a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a>
       </div>
      </div>
    </div>
  </div>
);
};

export default Hero;
