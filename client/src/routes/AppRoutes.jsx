import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import MaterialsPage from '../pages/MaterialsPage';
import MaterialDetailPage from '../pages/MaterialDetailPage';
import IndustriesPage from '../pages/IndustriesPage';
import Quality from '../pages/Quality';
import ResourcesPage from '../pages/ResourcesPage';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="materials/:slug" element={<MaterialDetailPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="quality" element={<Quality />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact-us" element={<ContactUs />} />

        {/* Clean Direct Product Route Aliases */}
        <Route path="butt-weld-pipe-fittings" element={<Navigate to="/products/butt-weld-pipe-fittings" replace />} />
        <Route path="forged-fittings" element={<Navigate to="/products/forged-fittings" replace />} />
        <Route path="flanges" element={<Navigate to="/products/flanges" replace />} />
        <Route path="fasteners" element={<Navigate to="/products/fasteners" replace />} />
        <Route path="pipes-and-tubes" element={<Navigate to="/products/pipes-and-tubes" replace />} />
        <Route path="plates-and-sheets" element={<Navigate to="/products/plates-and-sheets" replace />} />
        <Route path="rods" element={<Navigate to="/products/rods" replace />} />

        {/* Legacy .html Aliases for SEO Backwards Compatibility */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="about-us.html" element={<Navigate to="/about-us" replace />} />
        <Route path="butt-weld-pipe-fittings.html" element={<Navigate to="/products/butt-weld-pipe-fittings" replace />} />
        <Route path="forged-fittings.html" element={<Navigate to="/products/forged-fittings" replace />} />
        <Route path="flanges.html" element={<Navigate to="/products/flanges" replace />} />
        <Route path="fasteners.html" element={<Navigate to="/products/fasteners" replace />} />
        <Route path="pipes-and-tubes.html" element={<Navigate to="/products/pipes-and-tubes" replace />} />
        <Route path="plates-and-sheets.html" element={<Navigate to="/products/plates-and-sheets" replace />} />
        <Route path="rods.html" element={<Navigate to="/products/rods" replace />} />
        <Route path="quality.html" element={<Navigate to="/quality" replace />} />
        <Route path="contact-us.html" element={<Navigate to="/contact-us" replace />} />

        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
