const ItemCard = ( {item} ) => {
    return (
      <div key={item._id} className="item-card">
        <h4>{item.name}</h4>

        {/* display whether or not item has been fulfilled */}
        {item.fulfilled ? (
          <p>Fulfilled</p>
        ) : (
          <p>Not fulfilled</p>
        )}
        
        {/* display price is price exists */}
        {item.price && (
          <p>${item.price}</p>
        )}


        {/* display url if it exists */}
        {item.url && (
          <a href={item.url}>↗ URL</a>
        )}

        
      </div>
    );
  };
  
  export default ItemCard;
