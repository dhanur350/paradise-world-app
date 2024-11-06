import classNames from 'classnames';
import './CustomButton.scss';

interface Props {
  baseClassname?: string;
  round?: boolean;
  greenTheme?: boolean;
  greenShade2?: boolean;
  noBackground?: boolean;
  children?: any;
  onClick?: () => void;
}

function CustomButton(props: Props) {
  
  const { baseClassname, round, greenShade2, noBackground, children, onClick } = props;

  return (
    <button className={classNames(["custom-button", baseClassname], {
      "custom-button-round-shape" : round,
      "custom-button-green-shade-2" : greenShade2,
      "custom-button-transparent" : noBackground,
    })} onClick={onClick}>{children}</button>
  )
}

export default CustomButton;
