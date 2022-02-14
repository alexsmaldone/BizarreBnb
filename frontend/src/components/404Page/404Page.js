import React, { useState, useEffect } from "react";

import "./404Page.css";

function PageNotFound() {
  return (
    <main className="main-404">
      <h1>
        Sorry! Couldn't find what you're looking for but please enjoy this cool
        dome hotel in Peru!{" "}
      </h1>
      <div className="img-container-404">
        <img src="https://images.dwell.com/photos-6063391372700811264/6643222995713617920-large/located-amidst-a-garden-and-the-towering-peaks-of-la-pacha-peru-these-dome-homes-let-you-soak-up-south-americas-incredible-nature-while-getting-the-best-of-andean-culture.jpg"></img>
      </div>
    </main>
  );
}

export default PageNotFound;
