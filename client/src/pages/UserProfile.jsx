import UserInfo from '../components/User Info';
import GiftHistory from '../components/Gift History';
import DeleteProfileButton from '../components/Delete Profile Button';
import Avatar from '../components/Avatar';


const UserProfile = () => {
    return (
      <div className="container">

        <Avatar/>

        <UserInfo/>

        <GiftHistory/>

        <DeleteProfileButton/>

      </div>
    );
  };
  
  export default UserProfile;
