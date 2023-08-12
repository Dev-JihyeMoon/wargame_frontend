import { lazy } from "react";
import { Link } from "react-router-dom";

const Hint = () => {
    return (
        <Link to = "/FullLayout">
          <button className="btn" color="primary">
            Hint
          </button>
        </Link>
    );
  };
  
  export default Hint;