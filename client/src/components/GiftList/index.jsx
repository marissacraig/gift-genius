import "./index.css"

import { useGiftContext } from "../../utils/GiftContext";

const GiftList = () => {
  const [state, dispatch] = useGiftContext();
// Local state variable that will be used to hold the new name of a gift before it gets dispatched to the reducer
  const [newGiftName, setNewGiftName] = useState('');
  const [newGiftPrice, setNewGiftPrice] = useState('');
  
    return (
      <div>
      {state.students ? (
        <>
          <section className="gift-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {state.gifts.map((gift) => (
                  <tr key={gift.id}>
                    <td>{gift.id}</td>
                    <td>{gift.name}</td>
                    <td>{gift.price}</td>
                    <td>{gift.rating}</td>
                    <td>{gift.purchased}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          console.log('GiftList.js: Dispatched remove!');
                          // The remove student action will return a new copy of state with an updated students array after the `id` has been filtered from the array
                          return dispatch({
                            type: REMOVE_GIFT,
                            payload: gift.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form 
              className="add-gift"
              onSubmit={(e) => {
                e.preventDefault();
                console.log('GiftList.js: Dispatched add gift! ');
                dispatch({
                  type: ADD_GIFT,
                  payload: { name: newGiftName, price: newGiftPrice },
                });

                setNewGiftName('');
                setNewGiftPrice('');
              }}
            >
              <input
                value={newGiftName}
                onChange={(e) => setNewGiftName(e.target.value)}
                placeholder="New gift name..."
                type="text"
              />

              <select
                onChange={(e) => setNewGiftPrice(e.target.value)}
                value={newGiftPrice}
              >
                 <input
                value={newGiftPrice}
                onChange={(e) => setNewGiftPrice(e.target.value)}
                placeholder="New gift price..."
                type="text"
              />
                {/* <option>Choose Price...</option>
                {/* Map through all the majors and render an option element. If state is updated, the entire component will re-render and allow our new major to be displayed */}
                {/* {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))} */ }
              </select>
              {console.log(state.price)}
              <button type="submit">
                Add New Gift
              </button>
            </form>
            <h3>Add Gift Price</h3>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no gifts here!</span>
      )}
    </div>
    );
  };
  
  export default GiftList;