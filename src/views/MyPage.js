import { lazy } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import { Container } from "reactstrap";

const MyPage = () => {
    return (
      <main>
        <div className="pageWrapper d-lg-flex">
          <div className="contentArea">
            <Header />
            <Container className="p-4 wrapper" fluid>
              <Outlet />
            </Container>
          </div>
        </div>
      </main>
    );
  };
  
  export default MyPage;