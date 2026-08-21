import React from 'react';
import { createWhatsAppUrl } from '../utils/whatsapp';

const WhatsAppFloating = ({ productName }) => {
  const whatsappUrl = createWhatsAppUrl({ productName });

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-floating-btn shadow-lg"
      title="Instant WhatsApp Product Enquiry"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloating;
