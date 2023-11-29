import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../../utils/auth';
import { ADD_EVENT } from '../../utils/mutations';

const NewEventForm = () => {
  const [formState, setFormState] = useState({ title: '' })
  const [addEvent, { error }] = useMutation(ADD_EVENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("new event form submitted");
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
          <label htmlFor="title">Title:</label>
          <input
            placeholder="Name of event"
            name="title"
            type="title"
            id="title"
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

export default NewEventForm;