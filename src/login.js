import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
function Login() {
    const[data, setData] = useState({email:"", password:""});

    const [visible, setVisibility] = useState(false);
  
    const[error, setMessage] = useState({userEmail: null, userPassword:null});
  
    const emailRegex = /\S+@\S+\.\S+/;
  
    const changeData = (e) => {
  
      if(e.target.name === "userEmail"){
        setData({
          ...data,
          email: e.target.value
        });
  
        setMessage({
          ...error,
          userEmail: e.target.value.length === 0 ? "Email is required" : emailRegex.test(e.target.value) ? "Your email looks good!" : "Invalid pattern for email"
        });
      }
      else{
        setData({
          ...data,
          password: e.target.value
        });
  
        setMessage({
          ...error,
          userPassword: e.target.value.length === 0 ? "Password is required": e.target.value.length < 8 ? "Minimum length is 8 characters": null
        });
      }
    }
  
    const history = useHistory()
      const Submit = (e) => {
        e.preventDefault()
        history.push("/")
      }

    return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow">
              <div className="border border-3 border-dark"></div>
                <Card.Body>
                  <div className="mb-3 mt-md-4">
  
                    <h2 className="fw-bold mb-2 text-uppercase text-center">Log in</h2>
                    <p className=" mb-5 text-center">Please enter your email and password!</p>
  
                    <div className="mb-3">
                      <Form onSubmit={(e) => Submit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">Email address</Form.Label>
                          <Form.Control type="email" name="userEmail" placeholder="Enter email" value={data.email} onChange={(e) => changeData(e)}/>
                          <small className="text-danger">{error.userEmail}</small>
                        </Form.Group>
  
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label><span className="password-toogle-icon" onClick={() => setVisibility(!visible)}> {<i className = {visible ? "fa-solid fa-eye-slash":"fa-sharp fa-solid fa-eye"}></i> }</span>
                          <Form.Control type={visible ? "text" : "password"} name="userPassword" placeholder="Password" value={data.password} onChange={(e) => changeData(e)}/>
                          <small className="text-danger">{error.userPassword}</small>
                        </Form.Group>
  
                        <div className="d-grid my-4">
                          <Button variant="dark" type="submit">Login</Button>
                        </div>
                        
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Login;