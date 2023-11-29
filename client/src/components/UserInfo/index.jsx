import "./index.css"

const UserInfo = ({ name, username, email } ) => {
    return (
      <div className="container">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  
  export default UserInfo;
