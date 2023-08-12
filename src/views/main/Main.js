import { lazy } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import { Container } from "reactstrap";
import {
  Button,
} from "reactstrap";


const Main = () => {
    return (
      <main>
      <div className="pageWrapper d-lg-flex">
        <div className="contentArea">
          <Header />
          <Container className="p-4 wrapper" fluid>
          
            <h1>메인페이지 입니다.</h1>
            
            <Link to = "/login">
                <Button className="btn" color="primary">
                    로그인
                </Button>
            </Link>

            <Link to = "/join">
                <Button className="btn" color="primary">
                    회원가입
                </Button>
            </Link>

            <Link to = "/my">
                <Button className="btn" color="primary">
                    마이페이지
                </Button>
            </Link>

            <Link to = "/my/modify">
                <Button className="btn" color="primary">
                    공지사항
                </Button>
            </Link>

            <Link to = "/my/modify">
                <Button className="btn" color="primary">
                    공지사항
                </Button>
            </Link>

          </Container>
        </div>
      </div>
    </main>
    );
  };
  
  export default Main;
  