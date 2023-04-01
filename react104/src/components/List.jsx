import React from "react";
import User from "./User";
import Avatar from "./Avatar";
import "./styles/List.css";


export default function List({users}) {
  return (
    <div className="list">
      { users.map(user => (
          <div className="list-item" key={user.id}>
            <Avatar avatar={user.avatar} size="55px" />
            <User name={user.name} age={user.age} />
          </div>
      ))}
    </div>
  );
}
