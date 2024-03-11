import React from "react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";

const App = () => {
  return (
    <>
      <AwesomeSlider className="heightSetting">
        <div>First Slide</div>
        <div>Second Slide</div>
        <div>Third Slide</div>
        <div>Fourth Slide</div>
      </AwesomeSlider>
    </>
  );
};
export default App;
