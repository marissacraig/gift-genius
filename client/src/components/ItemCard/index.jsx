import { useState } from 'react';
import { useMutation } from '@apollo/client';
import "./index.css"

import ModalUpdateItem from '../ModalUpdateItem';

const ItemCard = ( {item} ) => {
  const [fulfilled,setFulfilled] = useState(item.fulfilled)
  return (
    <div key={item._id} className="item-card">
      <div className="card-header my-2 flex-row space-between">
        <h4>{item.name}</h4>
        {/* edit button */}
        <ModalUpdateItem item={item} />
      </div>

      
      {/* display price is price exists */}
      {item.price && (
        <p>${item.price}</p>
      )}


      {/* display url if it exists */}
      {item.url && (
        <a href={item.url}>↗ URL</a>
      )}

      <div className="fulfilled my-2 d-flex flex-row justify-content-end">
        {/* display whether or not item has been fulfilled */}
        {item.fulfilled ? (
          <p>Fulfilled</p>
        ) : (
          <p>Not fulfilled</p>
        )}

        {/* Click to mark as fulfilled */}
        <h3 className="fulfill-button">✔</h3>
      </div>
    </div>
  );
};
  
  export default ItemCard;
