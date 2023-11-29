import { useQuery } from '@apollo/client';

import ModalNewEvent from '../components/ModalNewEvent';

import { QUERY_ME } from '../utils/queries';

import Auth from "../utils/auth";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  const me = data?.me || {};

  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <h1>My Gift Lists</h1>
        <ModalNewEvent />
        {me.events[0] ? me.events.map(event => (
          <div key={event._id}>
            <a href={`events/${event._id}`}>{event.title}</a>
          </div>
        )) : <p>No gift lists</p>} 
      </div>
    );
  } else {
    return (
      <p>Log in to create and view your gift lists!</p>
    )
  }
};

export default Home;
