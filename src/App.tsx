import { useState } from "react";
import "./App.css";

function App() {
  const [showLargeMap, setShowLargeMap] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const smallMapPath =
    "'M145 117.196C149.124 121.275 155.221 122.295 157.753 122.295L166.165 120.383L171.591 118.471L176.204 114.01L184.887 115.603L192.485 114.01L201.982 115.603L223.96 107L238.613 115.603L236.713 128.03L231.558 135.04L223.96 139.182V143.643L228.845 144.599L223.96 156.07L226.945 158.619L236.713 154.158L242.14 162.762V167.222L255.165 171.046L257.335 178.375L270.36 185.385L268.46 192.395L271.445 196.537L276.601 193.669L277.957 197.493L272.53 201.635V205.459L277.957 206.733V213.106L275.244 217.248L277.957 229.675L280.671 235.092L285.012 227.764L310.79 235.092L304.549 243.377L305.634 266L317.03 262.814V249.431L323 254.21'";
  const largeMapPath =
    "'M675 569.557C694.07 588.18 722.256 592.836 733.965 592.836L772.857 584.106L797.948 575.377L819.276 555.008L859.422 562.283L894.55 555.008L938.46 562.283L1040.08 523L1107.83 562.283L1099.05 619.024L1075.21 651.032L1040.08 669.946V690.315L1062.66 694.679L1040.08 747.056L1053.88 758.695L1099.05 738.327L1124.14 777.609V797.978L1184.36 815.437L1194.39 848.9L1254.61 880.908L1245.83 912.916L1259.63 931.83L1283.47 918.735L1289.74 936.194L1264.65 955.108V972.567L1289.74 978.387V1007.48L1277.2 1026.4L1289.74 1083.14L1302.29 1107.87L1322.36 1074.41L1441.54 1107.87L1412.69 1145.7L1417.71 1249L1470.4 1234.45V1173.34L1498 1195.17'";

  function handleOnDistanceChange(event: { currentTarget: { value: string } }) {
    hidePathAnimation();
    const value = Number(event.currentTarget.value);
    const percent = ((value / 2863) * 100).toFixed(2);
    document.documentElement.style.setProperty(
      "--complete-percentage",
      `${percent}%`
    );
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${value * 0.003}s`
    );
  }

  function showPathAnimation() {
    const sliceContainer =
      document.documentElement.getElementsByClassName("slice-container")[0];
    sliceContainer.classList.add("show-animation");
  }

  function hidePathAnimation() {
    const sliceContainer =
      document.documentElement.getElementsByClassName("slice-container")[0];
    sliceContainer.classList.remove("show-animation");
  }

  function toggleAnimation() {
    const newShowAnimation = !showAnimation;
    setShowAnimation(newShowAnimation);
    if (newShowAnimation) {
      showPathAnimation();
    } else {
      hidePathAnimation();
    }
  }

  function toggleMapSize() {
    hidePathAnimation();
    const newShowLargeMap = !showLargeMap;
    document.documentElement.style.setProperty(
      "--animation-path",
      newShowLargeMap ? largeMapPath : smallMapPath
    );
    document.documentElement.style.setProperty(
      "--slice-size",
      newShowLargeMap ? "3rem" : "1.2rem"
    );
    document.documentElement.style.setProperty(
      "--slice-top",
      newShowLargeMap ? "-0.8rem" : "0"
    );
    setShowLargeMap(newShowLargeMap);
  }

  return (
    <div className="app-container">
      <div className="control-container">
        <label htmlFor="distance">Current distance (km):</label>
        <input
          type="text"
          id="name"
          name="distance"
          onChange={handleOnDistanceChange}
        />
        <button onClick={() => toggleAnimation()}>
          {showAnimation ? "Hide Animation" : "Show Animation"}
        </button>
        <button onClick={() => toggleMapSize()}>
          {showLargeMap ? "Show Small Map" : "Show Large Map"}
        </button>
      </div>
      <div className="main-container">
        <div className="slice-container">
          <img className="slice" src="slice.svg" alt="" />
        </div>
        <div className="image-container">
          <img
            src={showLargeMap ? "map-with-path.jpg" : "small-map-with-path.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
