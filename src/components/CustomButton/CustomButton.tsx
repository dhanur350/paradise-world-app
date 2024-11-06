import classNames from 'classnames';
import './CustomButton.scss';

interface Props {
  baseClassname?: string;
  round?: boolean;
  greenTheme?: boolean;
  greenShade2?: boolean;
  children?: any;
}

function CustomButton(props: Props) {
  
  const { baseClassname, round, greenShade2, children } = props;

  return (
    <button className={classNames(["custom-button", baseClassname], {
      "custom-button-round-shape" : round,
      "custom-button-green-shade-2" : greenShade2
    })}>{children}</button>
  )
}

export default CustomButton;
