import React from "react";

function Education() {
  return (
    <div className="container mt-20">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg"></img>
        </div>
        <div className="col-6">
          <h1 className="mt-5 mb-3 fs-2">Free and open market education</h1>
          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basic to advanced trading.{" "}
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-right-long"></i>
          </a>
          <p className="mt-5 text-muted">
            Trading Q&A the most active trading and investment community in
            india for all your market related queries.{" "}
            {/* We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges. */}
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A <i class="fa-solid fa-right-long"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;
