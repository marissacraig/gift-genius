
import { useQuery } from '@apollo/client';
import UserInfo from '../components/UserInfo';
import GiftHistory from '../components/GiftHistory';
import DeleteProfileButton from '../components/DeleteProfileButton';
import UserAvatar from '../components/Avatar';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import auth from '../utils/auth';

const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  const me = data?.me || {};
  console.log(`QUERY_ME returned: ${me}`);
  for (const prop in me) {
    console.log(`${prop}: ${me[prop]}`)
  }


  return (
    <div className="container">

      <UserAvatar avatar={me.avatar}/>

      <UserInfo
        name={me.name}
        username={me.username}
        email={me.email}
      />

      <GiftHistory/>

      <DeleteProfileButton/>

    </div>
  );
  };
  
  export default UserProfile;
