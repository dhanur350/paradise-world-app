import { CustomButton, ImageSlider } from "@/components";
import awardImg from "@/assets/award-image.png";
import { imagesURL } from "@/utils";
import "./Home.scss";

function Home() {

  const handleNavigateRedirection = () => {
    window.open(import.meta.env.VITE_APP_SERVICE_URL);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-welcome-container">
        
        <div className="homepage-welcome-intro-container">
          <h1 className="homepage-welcome-to">Welcome to</h1>
          <div className="homepage-paradise-world-kangra lora-font">
            <h1 className="homepage-welcome-intro-paradise-text">Paradise</h1>
            <h1 className="homepage-welcome-intro-world-kangra">World Kangra</h1>
          </div>
          <span className="homepage-your-ultimate-beauty">Your Ultimate Beauty Destination</span> 
          <span className="homepage-your-ultimate-beauty">in Himachal Pradesh!</span>
          <p className="homepage-nestled-in-the-serene">Nestled in the serene town of Kangra, Himachal Pradesh, Paradise World is more than just a beauty salon.</p>
          <span>it's a retreat where beauty meets tranquility.</span>
          <CustomButton round baseClassname="homepage-explore-more-button" greenShade2 onClick={handleNavigateRedirection}>Explore more</CustomButton>
        </div>

        <div className="homepage-welcome-image-container">
          <img src={awardImg} alt="award-image" className="homepage-welcome-award-image" />
          <div className="homepage-welcome-image-background"></div>
        </div>

      </div>

      <div className="homepage-featuring-container">
        <div className="homepage-featuring-title-container">
          <h2 className="homepage-featuring-title">Featuring</h2>
          <h2 className="homepage-featuring-title lora-font">Paradise World Kangra</h2>
        </div>
        <ImageSlider images={imagesURL} />
      </div>
    </div>
  )
}

export default Home;
