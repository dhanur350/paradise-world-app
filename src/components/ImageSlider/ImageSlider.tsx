import classNames from 'classnames';
import { useState } from 'react';
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
    if(imageIndex === images.length) {
      setImageIndex(imageIndex + 1)
    }
  };

  const handleBackImageIndex = () => {
    if(imageIndex !== 0) {
      setImageIndex(imageIndex - 1)
    }
  };

  return (
    <div className={classNames(["image-slider-container image-fade", baseClassname], {
      "": imageIndex
    })}>
      <CustomButton onClick={handleBackImageIndex} noBackground baseClassname='image-slider-back-button'>
        <SvgIcon name={CUSTOM_ICON_REF.ArrowLeft} />
      </CustomButton>
      <img src={images[imageIndex]} alt="image slider images" className='image-slide-display' />
      <CustomButton onClick={handleForwardImageIndex} noBackground baseClassname='image-slider-forward-button'>
        <SvgIcon name={CUSTOM_ICON_REF.ArrowRight} />
      </CustomButton>
    </div>
  )
}

export default ImageSlider;
