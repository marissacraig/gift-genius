import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_ITEM } from '../../utils/mutations';

const NewItemForm = () => {
  const [formState, setFormState] = useState({ name: '' })
  const [addItem, { error }] = useMutation(ADD_ITEM);

  const urlParts = window.location.href.split('/')
  const eventId=window.location.href.split('/')[urlParts.length-1]
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
      const mutationResponse = await addItem({
        variables: {
          eventId: eventId,
          name: formState.name,
          url: formState.url,
          price: parseFloat(formState.price),
          quantity: parseInt(formState.quantity),
          fulfilled: formState.fulfilled
        }
      });
      console.log(mutationResponse);
      const newEventId = mutationResponse.data.addItem._id;
      // refreshing the page to show updated change
      window.location = `/events/${eventId}`;
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.type == 'checkbox') {
      setFormState({
        ...formState,
        [name]: event.target.checked
      })
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
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
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="fulfilled">Fulfilled</label>
          <input
            name="fulfilled"
            type="checkbox"
            id="fulfilled"
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

export default NewItemForm;