import React from "react";

const Profile = (props) => {
  return (
    <div>
      {props.children}
      <h1>{props.name}</h1>
      <h1>{props.bio}</h1>
      <h1>{props.profession}</h1>
      <button onClick={() => props.alertMyInput(`My name is Saadani Jihene `)}>
        ClickMe
      </button>
    </div>
  );
};
export default Profile;
