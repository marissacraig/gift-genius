import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { UPDATE_ITEM } from '../../utils/mutations';

const UpdateItemForm = ({ item }) => {
  const [formState, setFormState] = useState({ name: item.name, url: item.url, price: item.price, quantity: item.quantity })
  const [updateItem, { error }] = useMutation(UPDATE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
      const mutationResponse = await updateItem({
        variables: {
          itemId: item._id,
          name: formState.name,
          url: formState.url,
          price: parseFloat(formState.price),
          quantity: parseInt(formState.quantity)
        }
      });
      console.log(mutationResponse);
      // refreshing the page to show updated change
      // window.location = `/events/${eventId}`;
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Name of item"
            name="name"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">URL:</label>
          <input
            placeholder="Link to item"
            name="url"
            type="url"
            id="url"
            value={formState.url || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Price:</label>
          <input
            placeholder="$"
            name="price"
            type="number"
            step="0.01"
            min="0"
            id="price"
            value={formState.price || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="Quantity desired"
            name="quantity"
            type="number"
            id="quantity"
            min="0"
            value={formState.quantity || undefined}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateItemForm;