import { lazy } from "react";
import { Link } from "react-router-dom";

const MyPageModify = () => {
    return (
      <dev>
        <h2>
          수정하기 페이지
        </h2>
        <Link to = "/my/info">
          <button className="btn" color="primary">
            저장
          </button>
      </Link>

      </dev>
    );
  };
  
  export default MyPageModify;