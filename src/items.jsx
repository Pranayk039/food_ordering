import React, { useState } from 'react';
import './items.css'; // For styling
import { Dosa } from './dosa';

function Items() {
  // List of items with image sources
  const items = [
    { id: 1, name: 'Dosa', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png' },
    { id: 2, name: 'Idly', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png' },
    { id: 3, name: 'Puri', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png' },
    { id: 4, name: 'Roti', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png' },
    { id: 5, name: 'Shawarma', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Autosuggest/Top%20200%20queries/Shawarma.png' },
    // { id: 6, name: 'Biryani', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Autosuggest/Top%20200%20queries/Biryani.png' },
    // { id: 7, name: 'Vada', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png' },
    // { id: 8, name: 'Bonda', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_bonda.png' },
    // { id: 9, name: 'Cakes', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png' },
    // { id: 10, name: 'Cooldrinks', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2024/8/27/c9e2b188-a6e8-4b74-a7d9-56459be48eed_c0173a1a-03ee-42cb-81fa-2e52334a67db.JPG' },
    // { id: 11, name: 'Manchurya', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/gkybwm03tajwm00fp0vd' },
    // { id: 12, name: 'Noodiles', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Autosuggest/Top%20200%20queries/Noodles.png' },
   ];
   const click = (itemName) => {
    alert(`You clicked on ${itemName}`);
  };
   return (
    <div className="container">
      <h2>Item List</h2>
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="item" onClick={() => click(item.name)}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;