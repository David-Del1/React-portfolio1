import React, { useState } from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';

import portfolios from '../components/allPortfolios';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


function Portfolio() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItem, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });

    setMenuItems(filteredData);
  };
  return (
    <div className="Portfolio">
      <div className="title">
        <Title title={'Portfolio'} span={'portfolio'} />
      </div>

      <div className="portfolios-data">
        <Categories filter={filter} categories={categories}/>
        <MenuItems MenuItems={menuItem}/>
      </div>
    </div>
  );
}

export default Portfolio;
