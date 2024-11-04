import classNames from 'classnames';
import { CUSTOM_ICON_REF, IconRef } from './IconRef';
import './SvgIcon.scss';

interface Props {
  name: CUSTOM_ICON_REF;
}

function SvgIcon(props: Props) {
  const {name} = props;

  const CustomIcon = IconRef[name];

  return (
    <div className={classNames([])}>
      <CustomIcon />
    </div>
  )
}

export default SvgIcon;
