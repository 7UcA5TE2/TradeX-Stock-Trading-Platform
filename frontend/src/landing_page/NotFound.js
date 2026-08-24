import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container p-5 mt-5">
        <div className="row text-center">
          <h1>404 : Not found</h1>
          <p>Sorry, the page you are looking for does not exists.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;