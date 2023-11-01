import React from "react";
import "./userMessages.css";
import { ChevronDown } from "react-bootstrap-icons";

const UserMessages = () => {
  return (
    <div className="message">
      <div className="userMessage">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ex
          possimus molestiae magni nemo perspiciatis exercitationem obcaecati
          nostrum illo eveniet vel delectus quisquam tempora libero dolore, cum
          veniam esse amet.
        </p>
        <span className="messageDetails">
          <p id="time">09:30 Am</p>
          <ChevronDown style={{marginTop:"0.3em"}}/>
        </span>
      </div>
      <div className="messageTail"></div>
    </div>
  );
};

export default UserMessages;
