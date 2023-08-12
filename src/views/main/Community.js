import { lazy } from "react";
import { Link } from "react-router-dom";

const Community = () => {
    return (
        <Link to = "/FullLayout">
          <button className="btn" color="primary">
          Community
          </button>
        </Link>
    );
  };
  
  export default Community;