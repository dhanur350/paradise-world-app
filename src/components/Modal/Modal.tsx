import classNames from 'classnames';
import { CUSTOM_ICON_REF, CustomButton, SvgIcon } from '..';
import { useEffect, useState } from 'react';
import './Modal.scss';

interface Props {
  baseClassname?: string;
  childClassname?: string;
  closeButton?: boolean;
  children?: any;
  open?: boolean;
  onClose?: (bool: any) => void;
}

function Modal(props: Props) {

  const { baseClassname, childClassname, children, closeButton, open, onClose } = props;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseButton = ()=> {
    setOpenModal(false);
    if(typeof onClose === "function") {
      onClose(false);
    }
  }

  useEffect(() => {
    setOpenModal(open ?? false);
  }, [open]);

  return (
    <>
    <div
      style={{
        visibility: openModal ? "visible" : "hidden",
        opacity: openModal ? "1" : "0"
      }}
      className={classNames(["modal-container", baseClassname])}>
      <div className={classNames(["modal-area", childClassname])}>
        {closeButton && 
        <div className="modal-close-button-container">
          <CustomButton noPadding noBackground onClick={handleCloseButton} baseClassname='modal-close-button'>
            <SvgIcon name={CUSTOM_ICON_REF.CloseSquare} size='small' />
          </CustomButton>
        </div>}
        {children}
      </div>
    </div>
    </>
  )
}

export default Modal;
