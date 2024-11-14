import classNames from 'classnames';
import { CUSTOM_ICON_REF, IconRef } from './IconRef';
import './SvgIcon.scss';

interface Props {
  name: CUSTOM_ICON_REF;
  baseClassname?: string;
  size?: 'tiny' | 'mini' | 'small' | 'medium' | 'large' | 'x-large';
}

function SvgIcon(props: Props) {
  const {name, baseClassname, size} = props;

  const CustomIcon = IconRef[name];

  return (
    <div className={classNames([`custom-icon-container custom-icon-${size}`, baseClassname])}>
      <CustomIcon />
    </div>
  )
}

export default SvgIcon;
