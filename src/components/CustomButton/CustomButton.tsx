import classNames from 'classnames';
import './CustomButton.scss';

interface Props {
  baseClassname?: string;
  greenTheme?: boolean;
  greenShade2?: boolean;
  children?: any;
}

function CustomButton(props: Props) {
  
  const { baseClassname, greenShade2, children } = props;

  return (
    <button className={classNames(["custom-button", baseClassname], {
      "custom-button-green-shade-2" : greenShade2
    })}>{children}</button>
  )
}

export default CustomButton;
