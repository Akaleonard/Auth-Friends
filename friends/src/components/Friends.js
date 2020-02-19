import React, { useState, useEffect } from "react";
import Form from "./Form";
import axiosWithAuth from "../utilities/Authorization";

const Friends = props => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
        setFriendsList(...friendsList, res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const addFriend = friend => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err.response));
  };
  return (
    <div>
      <h2>Friends</h2>
      <Form submitFriend={addFriend} />
      {friendsList.map(friend => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
    </div>
  );
};

export default Friends;
