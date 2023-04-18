import React, { useState, useEffect } from "react";
import axios from "axios";
import './User.css'

const User = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  
  return (
    <div className="user__main">
      {user?.map((u) => (
        <Card data={u} key={u.id} />
      ))}
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="card__main">
      <div>
        <label>Name</label>
        <p>{data.name}</p>
      </div>
      <div>
        <label>Username</label>
        <p>{data.username}</p>
      </div>
    </div>
  );
};

export default User;
