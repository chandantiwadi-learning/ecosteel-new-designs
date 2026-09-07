export const ECOSTEEL_WHATSAPP_NUMBER = '912235346200';

export const createWhatsAppUrl = ({ productName, material, grade, size, message } = {}) => {
  let text = `Hello ECO STEEL, I came across your website and would like to learn more about your products and services. Please share more information with me.`;

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
