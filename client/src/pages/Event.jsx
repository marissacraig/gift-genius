import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_EVENT } from '../utils/queries';

const Event = () => {
  const { eventId } = useParams();

  const { loading, data } = useQuery(
    QUERY_EVENT, { variables: { eventId: eventId }}
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const event = data?.event || {};
  for (const prop in event) {
    console.log(`${prop}: ${event[prop]}`)
  }

  if (!event.items.length) {
    return (
      <>
        <h1>{event.title}</h1>
        <div>No items yet</div>
      </>
    )
  }
  return (
    <div className="container">
      <h1>{event.title}</h1>

      {event.items.map(item => (
        <div key={item._id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Event;