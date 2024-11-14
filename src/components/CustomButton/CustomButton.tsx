import classNames from 'classnames';
import './CustomButton.scss';

interface Props {
  baseClassname?: string;
  round?: boolean;
  greenTheme?: boolean;
  greenShade2?: boolean;
  noBackground?: boolean;
  noPadding?: boolean;
  children?: any;
  onClick?: () => void;
  disabled?: boolean;
}

function CustomButton(props: Props) {
  
  const { baseClassname, round, greenShade2, noBackground, noPadding, children, onClick, disabled } = props;

  return (
    <button className={classNames(["custom-button", baseClassname], {
      "custom-button-round-shape" : round,
      "custom-button-green-shade-2" : greenShade2,
      "custom-button-transparent" : noBackground,
      "custom-button-nopadding" : noPadding
    })} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default CustomButton;
