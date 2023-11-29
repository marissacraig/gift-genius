import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ModalNewItem from '../components/ModalNewItem';
import ItemCard from '../components/ItemCard';

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

  // if (!event.items.length) {
  //   return (
  //     <>
  //       <h1>{event.title}</h1>
  //       <ModalNewItem />
  //       <div>No items yet</div>
  //     </>
  //   )
  // }
  return (
    <div className="container">
      <h1>{event.title}</h1>

      <ModalNewItem />

      <div className="items-list flex-row flex-wrap">
      {!event.items.length ?
        <div>No items yet</div>
        :
        event.items.map(item => (
          <ItemCard item={item} key={item._id} className="" />
        ))
      }
      </div>
    </div>
  )
}

export default Event;