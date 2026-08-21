import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { materialsData } from '../data/materials';

const ProductFinder = ({ onOpenRFQ }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredProducts = productsData.filter((prod) => {
    const matchCategory = !selectedCategory || prod.id === selectedCategory || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchMaterial = !selectedMaterial || prod.materials.includes(selectedMaterial);
    const matchKeyword =
      !searchKeyword ||
      prod.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      prod.standards.some((s) => s.toLowerCase().includes(searchKeyword.toLowerCase()));
    return matchCategory && matchMaterial && matchKeyword;
  });

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedMaterial('');
    setSearchKeyword('');
  };

  return (
    <div className="product-finder-widget shadow-lg">
      <div className="finder-header">
        <div className="finder-title-wrap">
          <i className="fas fa-filter finder-icon"></i>
          <div>
            <h3>Industrial Product Finder</h3>
            <p>Filter by product category, material grade, or specification</p>
          </div>
        </div>
        <span className="results-badge">{filteredProducts.length} Product Line(s) Found</span>
      </div>

      <div className="finder-controls-grid">
        {/* Category Select */}
        <div className="finder-field">
          <label>Product Category</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {productsData.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Material Select */}
        <div className="finder-field">
          <label>Material Alloy</label>
          <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
            <option value="">All Materials</option>
            {materialsData.map((m) => (
              <option key={m.id} value={m.name}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Keyword */}
        <div className="finder-field">
          <label>Specification / Grade / Keyword</label>
          <input
            type="text"
            placeholder="e.g. 316L, Inconel 625, ASME B16.9, Sch 40..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>

      {/* Results Matrix Preview */}
      <div className="finder-results-box">
        {filteredProducts.length > 0 ? (
          <div className="finder-cards-flex">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="finder-mini-card">
                <img src={prod.image} alt={prod.name} className="mini-card-img" />
                <div className="mini-card-info">
                  <h4>{prod.name}</h4>
                  <p className="mini-spec">
                    <strong>Size:</strong> {prod.sizeRange}
                  </p>
                  <div className="mini-tags">
                    {prod.materials.slice(0, 3).map((mat, i) => (
                      <span key={i} className="mini-tag">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mini-card-actions">
                  <button
                    type="button"
                    className="btn-mini-view"
                    onClick={() => navigate(`/products/${prod.slug}`)}
                  >
                    View Specs
                  </button>
                  <button
                    type="button"
                    className="btn-mini-rfq"
                    onClick={() => onOpenRFQ(prod.name)}
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="finder-empty-state">
            <i className="fas fa-search-minus"></i>
            <p>No products match your exact selection. Try clearing filters or submit a custom RFQ.</p>
            <button type="button" className="btn-reset-finder" onClick={handleReset}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFinder;
