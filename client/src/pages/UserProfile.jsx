import { useQuery } from '@apollo/client';

import UserInfo from '../components/User Info';
import GiftHistory from '../components/Gift History';
import DeleteProfileButton from '../components/Delete Profile Button';
import UserAvatar from '../components/Avatar';

import { QUERY_ME } from '../utils/queries';

import auth from '../utils/auth';

const UserProfile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || {};

  console.log(auth.loggedIn())

  console.log(`Query returned: ${data}`);

  if (loading) {
    return <div>Loading...</div>;
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
