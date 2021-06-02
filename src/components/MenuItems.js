import React from 'react';

function MenuItems({ MenuItems }) {
  return (
    <div className="portfolios">
      {
        MenuItems.map((item) => {
          return <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>
                    {item.icon1}
                  </a>
                  <a href={item.link2}>
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>
              {item.title}
            </h5>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum nisi inventore nostrum beatae quam culpa modi repellendus necessitatibus ratione.</p>
          </div>;
        })
      }
    </div>
  );
}

export default MenuItems;
