// // import React from "react";

// // const Brokerage = () => {
// //   return (
// //     // <div className="container">
// //     //   <div className="row">
// //     //   <div className="col-4 p-5 mx-5 text-center">
// //     //     <a heref= "" className=" text-center mx-5" style={{textDecoration:"none"}}>Brokerage calculator</a>



// //     //   </div>
// //     //   <div className="col-5 mx-5 text-center">
// //     //     <a href="" style={{textDecoration:"none"}}>List of Charges</a>
// //     //   </div>
// //     //   </div>
// //     <div className="container">
// //       <div className="row p-5 mt-5 text-center">
// //         <div className="col-5 mx-5 p-4 text-left">
// //           <a href="" style={{ textDecoration: "none" }}><h3 className="fs-5 mx-5">Brokerage calculator</h3>
// //           </a>
// //           <ul className="text-left " style={{textAlign:"left"}}>
// //             <li>Call & Trade and RMS auto-square off: Additional charges of ₹50 + GST per order.
// //             </li>
// //             <li>Digital contract notes will be sent via e-mail.</li>
// //             <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
// //             <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
// //             <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
// //             <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
// //           </ul>
// //         </div>
// //         <div className=" col-5 p-4 mx-5">
// //           <a href="" style={{ textDecoration: "none",marginRight:"100px" }}><h3 className="fs-5 mx-5"> List of charges</h3>
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // };

// // export default Brokerage;




// import React from "react";

// const Brokerage = () => {
//   return (
//     <div className="container mt-4 p-5">
//       {/* Centered Heading */}
//       <div className=" text-center">
//       <a href="#" className="fw-bold text-primary mt-5" style={{ textDecoration: "none" }}>
//             Brockerage calculator
//           </a>
//       </div>

//       <div className="row mt-3">
//         {/* Left Column - List Items */}
//         <div className="col-8 text-start">
//           <ul>
//             <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
//             <li>Digital contract notes will be sent via e-mail.</li>
//             <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
//             <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
//             <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
//             <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
//           </ul>
//         </div>

//         {/* Right Column - List of Charges */}
//         <div className="col-4 text-end">
//           <a href="#" className="fw-bold text-primary" style={{ textDecoration: "none" }}>
//             List of charges
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brokerage;


import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-4">
      {/* Heading Row - Both Headings in the Same Line */}
      <div className=" d-flex justify-content-between align-items-center text-center">
        <a className="col-4 fw-bold text-primary text-end align-items-center fs-5" style={{textDecoration:"none"}}>  Brokerage Calculator</a>
        <a href="#" className="col-4 fw-bold text-primary align-items-center fs-5  " style={{ textDecoration: "none" }}>
          List of charges
        </a>
      </div>

      {/* Content Row - List Items */}
      <div className="d-flex justify-content-between mt-3">
        {/* Left Side - List Items */}
        <div className="w-75 text-start">
          <ul style={{lineHeight:"2.5"}}>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
