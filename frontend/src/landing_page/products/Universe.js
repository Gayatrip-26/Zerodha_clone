// import React from "react";

// const Universe = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
//     return (
//         <div className="container mb-5 ">
//             <div className="row text-center mt-5"><p className="fs-4 mb-5 p-3">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
//                 <div className="text-center p-5">
//                     <h1 className="text-muted" style={{ fontSize: "35px" }}>The Zerodha Universe</h1>
//                     <h3 className="text-muted mt-4  mb-3" style={{ fontSize: "17px" }}>Extend your trading and investment experience even further with our partner platforms</h3>



//                     <div className="row mx-2 mt-3">
//                         <div className="col-4 p-3 mt-5">
//                             <img style={{width:"220px"}} src="media/zerodhaFundhouse.png" />
//                             <p className="text-small  text-muted mt-2 p-4" >Our asset management venture
//                                 that is creating simple and transparent index
//                                 funds to help you save for your goals.
//                             </p>
//                         </div>
//                         <div className="col-4 p-3 mt-5">
//                             <img src="media/sensibullLogo.svg" style={{width:"220px"}} className="mt-3"/>
//                             <p className="text-small  text-muted mt-2 p-4">Options trading platform that lets you
//                                 create strategies, analyze positions, and examine
//                                 data points like open interest, FII/DII, and more.
//                             </p>
//                         </div>
//                         <div className="col-4 p-3 mt-5">
//                             <img src="media/goldenpiLogo.png" style={{width:"230px"}} />
//                             <p className="text-small text-muted mt-2 p-4"> Online platform for retail investors to buy bonds and debentures in India.</p>
//                         </div>
//                     </div>
//                     <div className="row mx-2">
//                         <div className="col-4 p-3 mt-5">
//                             <img style={{width:"180px"}} src="media/streakLogo.png" />
//                             <p className="text-small text-muted mt-2 p-4">Systematic trading platform
//                                 that allows you to create and backtest
//                                 strategies without coding.</p>
//                         </div>
//                         <div className="col-4 p-3 mt-5">
//                             <img src="media/smallcaseLogo.png"  style={{width:"225px"}}/>
//                             <p className="text-small text-muted mt-2 p-4" style={{fontSize:"px"}}>Thematic investing platform
//                                 that helps you invest in diversified
//                                 baskets of stocks on ETFs.
//                             </p>
//                         </div>
//                         <div className="col-4 p-3 mt-4 ">
//                             <img style={{width:"155px"}} src="media/dittoLogo.png" />
//                             <p className="text-small text-muted mt-2 p-4">Personalized advice on life
//                                 and health insurance. No spam
//                                 and no mis-selling.</p>
//                         </div>
                        
//                     </div>
               
                    
//                 </div>

               
//             </div>
//             <div className=" text-center " style={{display:"block",alignItems:"center",display:"contents"}}>
//                     <button style={{backgroundColor:"#24A0ED",width:"200px",height:"50px",border:"none",color:"white",display:"block"}}>Sign Up Now</button>
//             </div>

//         </div>
        
//     );
// }
// export default Universe;



import React from "react";

const Universe = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
    return (
        <div className="container mb-5">
            <div className="row text-center mt-5">
                <p className="fs-4 mb-5 p-3">
                    Want to know more about our technology stack? Check out the Zerodha.tech blog.
                </p>
                <div className="text-center p-5">
                    <h1 className="text-muted" style={{ fontSize: "35px" }}>The Zerodha Universe</h1>
                    <h3 className="text-muted mt-4 mb-3" style={{ fontSize: "17px" }}>
                        Extend your trading and investment experience even further with our partner platforms
                    </h3>

                    <div className="row mx-2 mt-3">
                        <div className="col-4 p-3 mt-5">
                            <img style={{ width: "220px" }} src="media/zerodhaFundhouse.png" alt="Zerodha Fundhouse" />
                            <p className="text-small text-muted mt-2 p-4">
                                Our asset management venture that is creating simple and transparent index
                                funds to help you save for your goals.
                            </p>
                        </div>
                        <div className="col-4 p-3 mt-5">
                            <img src="media/sensibullLogo.svg" style={{ width: "220px" }} className="mt-3" alt="Sensibull Logo" />
                            <p className="text-small text-muted mt-2 p-4">
                                Options trading platform that lets you create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                        <div className="col-4 p-3 mt-5">
                            <img src="media/goldenpiLogo.png" style={{ width: "230px" }} alt="GoldenPi Logo" />
                            <p className="text-small text-muted mt-2 p-4">
                                Online platform for retail investors to buy bonds and debentures in India.
                            </p>
                        </div>
                    </div>

                    <div className="row mx-2">
                        <div className="col-4 p-3 mt-5">
                            <img style={{ width: "180px" }} src="media/streakLogo.png" alt="Streak Logo" />
                            <p className="text-small text-muted mt-2 p-4">
                                Systematic trading platform that allows you to create and backtest strategies without coding.
                            </p>
                        </div>
                        <div className="col-4 p-3 mt-5">
                            <img src="media/smallcaseLogo.png" style={{ width: "225px" }} alt="Smallcase Logo" />
                            <p className="text-small text-muted mt-2 p-4">
                                Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                            </p>
                        </div>
                        <div className="col-4 p-3 mt-4">
                            <img style={{ width: "155px" }} src="media/dittoLogo.png" alt="Ditto Logo" />
                            <p className="text-small text-muted mt-2 p-4">
                                Personalized advice on life and health insurance. No spam and no mis-selling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
    );
};

export default Universe;
