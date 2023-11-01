import React from "react";
import "./OthersMessages.css";
import { ChevronDown } from "react-bootstrap-icons";

const OthersMessages = () => {
  return (
    <div className="mainMessage">
      <div className="otherMessageTail"></div>
      <div className="otherMessage">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ex
          possimus molestiae magni nemo perspiciatis exercitationem obcaecati
          nostrum illo eveniet vel delectus quisquam tempora libero dolore, cum
          veniam esse amet.
        </p>
        <span className="otherDetails">
          <ChevronDown style={{marginTop:"0.3em"}}/>
          <p id="time">09:30 Am</p>
        </span>
      </div>
    </div>
  );
};

export default OthersMessages;
