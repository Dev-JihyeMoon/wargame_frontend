import { lazy } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Link to = "/FullLayout">
          <button className="btn" color="primary">
            primary
          </button>
        </Link>
    );
  };
  
  export default Login;