import { useState } from 'react';
import { Modal } from '..';
import { footerQuickLinksData } from '@/utils/FooterQuickLinksContent';
import './Footer.scss';

function Footer() {

  const [open, setOpen] = useState<number>(-1);

  const renderQuickLinksData = (item: any, index: number) => {
    
    const {title, data } = item;
    
    const handleOpen = () => {
      setOpen(index)
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
      </div>
    </div>
  )
}

export default Footer
