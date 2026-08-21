import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PremiumNavbar from '../components/PremiumNavbar';
import PremiumFooter from '../components/PremiumFooter';
import RFQModal from '../components/RFQModal';
import GlobalSearchModal from '../components/GlobalSearchModal';
import WhatsAppFloating from '../components/WhatsAppFloating';

const MainLayout = () => {
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqInitialProduct, setRfqInitialProduct] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenRFQ = (productName = '') => {
    setRfqInitialProduct(productName);
    setIsRFQOpen(true);
  };

  return (
    <div className="eco-app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PremiumNavbar onOpenRFQ={handleOpenRFQ} onOpenSearch={() => setIsSearchOpen(true)} />
      
      <main className="eco-main-content">
        <Outlet context={{ onOpenRFQ: handleOpenRFQ }} />
      </main>

      <PremiumFooter onOpenRFQ={handleOpenRFQ} />
      <WhatsAppFloating />

      <RFQModal isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} initialProduct={rfqInitialProduct} />
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default MainLayout;
