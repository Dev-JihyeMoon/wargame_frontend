import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "reactstrap";
import Buttons from "../views/ui/Buttons";

const WelCome = () => {
    const playnow = () => {
        navigate("/fulllayout");
      }
  return (
    <main>
        <div className="pageWrapper d-lg-flex">
        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>

        
        <Button className="btn" color="primary" onClick={playnow}>
                  PLAY NOW!
                  </Button>
        </div>
    </main>
  );
};

export default WelCome;