export const ECOSTEEL_WHATSAPP_NUMBER = '919321743595';

export const createWhatsAppUrl = ({ productName, material, grade, size, message }) => {
  let text = `Hello Eco Steel Engineering,\n\nI am interested in your products for a commercial enquiry.`;

  if (productName) {
    text += `\n- Product: ${productName}`;
  }
  if (material) {
    text += `\n- Material: ${material}`;
  }
  if (grade) {
    text += `\n- Grade: ${grade}`;
  }
  if (size) {
    text += `\n- Size/Spec: ${size}`;
  }
  if (message) {
    text += `\n- Details: ${message}`;
  }

  text += `\n\nPlease share price estimation, MTC availability, and lead time.`;

  return `https://wa.me/${ECOSTEEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
