import { lazy } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";

const Login = () => {
    return (
        <dev>
            <Row>
                <Col> 
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            LOGIN
                        </CardTitle>
                        <CardBody>
                            <Form></Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email"/>
                            </FormGroup>    

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input id="examplePassword" name="password" placeholder="password placeholder" type="password" />
                            </FormGroup>
                            
                            <Link to = "/">
                                <Button className="mt-2">Submit</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </dev>
    );
  };
  
  export default Login;