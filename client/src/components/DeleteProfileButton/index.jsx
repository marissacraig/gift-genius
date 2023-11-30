import "./index.css"
import { useMutation } from '@apollo/client';
import auth from "../../utils/auth";

import { DELETE_USER } from "../../utils/mutations";

const DeleteProfileButton = ({ userId }) => {
  const [deleteUser, { error }] = useMutation(DELETE_USER)

  const handleDeleteUser = async () => {
    try {
      const mutationResponse = await deleteUser({
        variables: {
          userId: userId
        }
      });
      auth.logout();
    } catch (err) {
      console.error(err);
    }
  }
    return (
      <button onClick={handleDeleteUser} className="delete-profile-button">
        Delete Profile
      </button>
    );
  };
  
  export default DeleteProfileButton;