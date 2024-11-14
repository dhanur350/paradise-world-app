import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { CUSTOM_ICON_REF, CustomButton, SvgIcon } from '..';
import './ImageSlider.scss';

interface Props {
  images: any[];
  baseClassname?: string;
}

function ImageSlider(props: Props) {

  const { images, baseClassname } = props;
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleForwardImageIndex = () => {
    if(imageIndex <= images.length - 1) {
      setImageIndex(imageIndex + 1)
    }
  };

  const handleBackImageIndex = () => {
    if(imageIndex !== 0) {
      setImageIndex(imageIndex - 1)
    }
  };

  const renderImages = (item: any, index: number) => {
    return <img key={index} src={item} alt="image slider images" className={classNames(["image-slide-display"],{
      "image-active-slider image-fade" : imageIndex === index,
    })} />
  }

   // Loop the image index every 2 seconds
   useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classNames(["image-slider-container", baseClassname])}>
      <CustomButton disabled={imageIndex === 0} onClick={handleBackImageIndex} noBackground baseClassname='image-slider-back-button'>
        <SvgIcon name={CUSTOM_ICON_REF.ArrowLeft} />
      </CustomButton>
      {images.map(renderImages)}
      <CustomButton disabled={imageIndex === images.length - 1} onClick={handleForwardImageIndex} noBackground baseClassname='image-slider-forward-button'>
        <SvgIcon name={CUSTOM_ICON_REF.ArrowRight} />
      </CustomButton>
    </div>
  )
}

export default ImageSlider;
