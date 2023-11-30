import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'antd';
import "./index.css"

import ModalUpdateItem from '../ModalUpdateItem';

import { UPDATE_ITEM } from '../../utils/mutations'

const ItemCard = ( {item} ) => {
  const [fulfilled,setFulfilled] = useState(item.fulfilled);
  const [updateItem, { error }] = useMutation(UPDATE_ITEM);

  const toggleFulfill = async(event) => {
    setFulfilled(!fulfilled);
    const mutationResponse = await updateItem({
      variables: {
        itemId: item._id,
        fulfilled: fulfilled
      }
    });
  }

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
        <Button 
          type="text"
          shape="circle"
          onClick={toggleFulfill}
          className={item.fulfilled ? 'fulfillButton fulfilled' : 'fulfillButton'}
        >
            ✔
        </Button>
      </div>
    </div>
  );
};
  
  export default ItemCard;
