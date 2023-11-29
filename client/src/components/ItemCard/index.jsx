import "./index.css"
const ItemCard = ( {item} ) => {
    return (
      <div key={item._id} className="item-card">
        <div className="card-header my-2 flex-row space-between">
          <h4>{item.name}</h4>
          {/* edit button */}
          <button>Edit</button>
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
          <h3 class="fulfill-button">✔</h3>
        </div>
      </div>
    );
  };
  
  export default ItemCard;
