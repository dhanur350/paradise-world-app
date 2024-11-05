import { CustomButton } from "@/components";
import "./Home.scss";

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-welcome-container">
        
        <div className="homepage-welcome-intro-container">
          <h1 className="homepage-welcome-to">Welcome to</h1>
          <div className="homepage-paradise-world-kangra lora-font">
            <h1 className="homepage-welcome-intro-paradise-text">Paradise</h1>
            <h1 className="homepage-welcome-intro-world-kangra">World Kangra</h1>
          </div>
          <span>Your Ultimate Beauty Destination</span> 
          <span>in Himachal Pradesh!</span>
          <p>Nestled in the serene town of Kangra, Himachal Pradesh, Paradise World is more than just a beauty salon.</p>
          <span>it's a retreat where beauty meets tranquility.</span>
          <CustomButton greenShade2>Explore more</CustomButton>
        </div>

        <div className="homepage-welcome-image-container">
          
        </div>

      </div>
    </div>
  )
}

export default Home;
