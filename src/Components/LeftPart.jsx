import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./Assets/48594-digital-media-3d.json";

function LeftPart() {
  return (
    <div className="p-5 flex items-center justify-center h-screen relative">
      <div className="w-[900px]">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
      </div>
      <div className="shadows"></div>
      <div className="shadow2"></div>
    </div>
  );
}

export default LeftPart;
