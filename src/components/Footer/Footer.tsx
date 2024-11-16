import { useState } from 'react';
import { CUSTOM_ICON_REF, Modal, SvgIcon } from '..';
import { footerQuickLinksData } from '@/utils/FooterQuickLinksContent';
import './Footer.scss';
import { footerFollowLinks } from '@/utils';

function Footer() {

  const [open, setOpen] = useState<number>(-1);

  const renderFooterFollowLinks = (item: any, index: number) => {
    return(
      <SvgIcon key={index} name={item.icon} size='medium' baseClassname='footer-follow-us-links' />
    )
  }

  const renderQuickLinksData = (item: any, index: number) => {
    
    const { title, data } = item;
    
    const handleOpen = () => {
      setOpen(index);
    }

    return(
      <>
        <span className='footer-quick-link-text' key={index} onClick={handleOpen}>{title}</span>
        <Modal
          open={index === open}
          onClose={() => setOpen(-1)}
          closeButton
        >
          {data}
        </Modal>
      </>
    )
  }

  return (
    <div className='footer-container'>
      <div className="footer-title-container">
        <span className='footer-company-title-text lora-font'>Paradise World Kangra</span>
        <span className='footer-follow-us-text'>Follow us</span>
      </div>

      <div className="footer-quick-links-container">
        <div className="footer-quick-link-area">
          <span className='footer-quick-link-title'>Quick Links</span>
          <div className="footer-quick-links">{footerQuickLinksData.map(renderQuickLinksData)}</div>
        </div>

        <div className="footer-follow-us-links-container">{footerFollowLinks.map(renderFooterFollowLinks)}</div>
      </div>

      <span className='footer-contact-us-text'>Contact us</span>

      <div className="footer-contact-details-container">
        <div className="footer-client-details-container">
          <div className="footer-client-detail">
            <SvgIcon name={CUSTOM_ICON_REF.EmailCheck} size='mini' baseClassname='footer-client-contact-icon' />
            <a className='footer-client-contact-text' href="tel:+919418055915" target='_blank'>+919418055915</a>
          </div>
          <div className="footer-client-detail">
            <SvgIcon name={CUSTOM_ICON_REF.CallIncoming} size='mini' baseClassname='footer-client-contact-icon' />
            <a className='footer-client-contact-text' href="mailto:theparadiseindia@gmail.com" target='_blank'>theparadiseindia@gmail.com</a>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Footer
