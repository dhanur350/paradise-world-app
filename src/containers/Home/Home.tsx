import { CUSTOM_ICON_REF, CustomButton, ImageSlider, SvgIcon, TestimonialsCard } from "@/components";
import awardImg from "@/assets/award-image.png";
import conferenceImage from "@/assets/conference.png";
import { imagesURL, paradiseFeatureData, reviewData } from "@/utils";
import "./Home.scss";

function Home() {

  const handleNavigateRedirection = () => {
    window.open(import.meta.env.VITE_APP_SERVICE_URL);
  };

  const renderParadiseFeatureCard = (item: any, index: number) => {

    const { icon, title, description } = item;

    return (
      <div key={index} className="homepage-feature-card-container">
        <div className="homepage-feature-card-title-container">
          <SvgIcon name={icon} size="medium" />
          <span className="homepage-feature-card-title">{title}</span>
        </div>
        <p>{description}</p>
      </div>
    )
  }

  const renderReviewData = (item: any, index: number) => (
    <TestimonialsCard key={index} {...item} />
  )

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

      <div className="homepage-why-choose-paradise-container">
        <div className="homepage-why-choose-paradise-title-container">
          <span className="homepage-why-choose-text">Why choose</span>
          <span className="lora-font">Paradise World Kangra?</span>
        </div>

        <div className="homepage-paradise-feature-container">
          <img src={conferenceImage} alt="" />
          <div className="homepage-paradise-feature-cards-container">{paradiseFeatureData.map(renderParadiseFeatureCard)}</div>
        </div>
      </div>

      <div className="homepage-our-testimonials-container">
        <SvgIcon name={CUSTOM_ICON_REF.OurTestimonials} baseClassname="homepage-our-testimonials-svg"/>
        <div className="homepage-reviewes-card-container">{reviewData.map(renderReviewData)}</div>
      </div>
    </div>
  )
}

export default Home;
