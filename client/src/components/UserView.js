import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


export const UserView = (props) => {
  // console.log(props.match.params.userId);
  const { userId } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({
    id: '',
    username: '',
  });

  useEffect(() => {
    axios.get(`/api/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [userId]);

  const handleDelete = (userId) => {
    axios.delete(`/api/users/${userId}`)
      .then(() => {
        history.push('/user');
      });
  };

  return (
    <div>
      <h1>I am user view </h1>
      <input
        onChange={(e) => setUser({
          ...user,
          username: e.target.value
        })}
        value={user.username}
      />
      <p>{user.password}</p>
      <button
        onClick={() => handleDelete(userId)}
      >
        Delete me
      </button>
      <button>
        Update Username
      </button>
    </div>
  );
};
