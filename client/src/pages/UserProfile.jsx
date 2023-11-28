import UserInfo from '../components/UserInfo';
import GiftHistory from '../components/GiftHistory';
import DeleteProfileButton from '../components/DeleteProfileButton';
import UserAvatar from '../components/Avatar';


const UserProfile = () => {
    return (
      <div className="container">

        <UserAvatar/>

        <UserInfo/>

        <GiftHistory/>

        <DeleteProfileButton/>

      </div>
    );
  };
  
  export default UserProfile;
