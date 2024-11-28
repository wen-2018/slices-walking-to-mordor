import "./App.css";

function App() {
  function handleOnDistanceChange(event: { currentTarget: { value: string } }) {
    hideAnimation();
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

  function showAnimation() {
    const sliceContainer =
      document.documentElement.getElementsByClassName("slice-container")[0];
    sliceContainer.classList.remove("hide-animation");
    sliceContainer.classList.add("show-animation");
    console.log("clicked");
  }

  function hideAnimation() {
    const sliceContainer =
      document.documentElement.getElementsByClassName("slice-container")[0];
    sliceContainer.classList.add("hide-animation");
    sliceContainer.classList.remove("show-animation");
  }

  return (
    <div>
      <label htmlFor="distance">Current distance (km):</label>
      <input
        type="text"
        id="name"
        name="distance"
        onChange={handleOnDistanceChange}
      />
      <button onClick={() => showAnimation()}>Show Animation</button>
      <div className="main-container">
        <div className="slice-container hide-animation">
          <img className="slice" src="slice.svg" alt="" />
        </div>
        <div className="image-container">
          <img src="map-with-path.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
