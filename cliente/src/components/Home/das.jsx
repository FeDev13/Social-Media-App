import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [notFollowing, setNotFollowing] = useState([]);

  useEffect(() => {
    // llamada a la API para obtener la lista completa de usuarios
    axios.get(allUsersRoute)
      .then(res => setAllUsers(res.data))
      .catch(error => console.error(error));

    // llamada a la API para obtener la lista de usuarios que estás siguiendo
    axios.get(`http://localhost:5050/users/follow/${userId}`)
      .then(res => setFollowing(res.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setNotFollowing(allUsers.filter(user => !following.includes(user._id)));
  }, [allUsers, following]);

  return (
    <div>
      <h2>Usuarios que no sigues</h2>
      <ul>
        {notFollowing.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
