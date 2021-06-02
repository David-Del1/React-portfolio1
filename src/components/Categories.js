import React from 'react';
import { NavLink } from 'react-router-dom';

function Categories({ filter, categories }) {
  return (
    <div className="Categories">
      {
        categories.map((cat, index) => {
          return <NavLink 
            key={index}
            onClick={() => filter(cat)}
            to="/portfolio"
            className="cat-link">
            
            {cat}
          </NavLink>;
        })
      }
    </div>
  );
}

export default Categories;
