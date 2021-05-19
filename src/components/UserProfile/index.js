import React from "react";

const UserProfile = (props) => {
  // const { currentUser } = props;
  // const { displayName } = currentUser;

  return (
    <div className="userProfile">
      Hello
      <ul>
        <li>
          <div className="img">
            <img src="" alt="userimage" />
          </div>
        </li>
        <li>
          {/* <span className="displayName">{displayName && displayName}</span> */}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
