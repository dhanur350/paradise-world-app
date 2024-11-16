import { CUSTOM_ICON_REF, SvgIcon } from '..';
import './TestimonialsCard.scss';

interface Props { 
  starRating?: number;
  description?: string;
  reviewerName?: string;
}

function TestimonialsCard(props: Props) {

  const {starRating, description, reviewerName} = props;

  const renderReviewStars = (item: any, index: number) => {
    return(
      <SvgIcon name={CUSTOM_ICON_REF.Star} baseClassname='' key={index + item} size='small' />
    )
  }

  const length: number = starRating ?? 1;

  return (
    <div className='testimonials-card-container'>
      <div className="testimonials-card-star-container">{Array.from({length}).map(renderReviewStars)}</div>
      <p>{description}</p>
      <div className="testimonial-card-reviewer-name-container">
        <span>-</span>
        <span>{reviewerName}</span>
      </div>
    </div>
  )
}

export default TestimonialsCard;
