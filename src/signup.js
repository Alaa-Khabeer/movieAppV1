import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function SignUp() {
    const[data, setData] = useState({name:"", uname:"", email:"", password:"", confirm:""});
    const[error, setMessage] = useState({Name:null, userName:null, userEmail: null, userPassword:null, userConfirm:null});
    const [pvisible, setPVisibility] = useState(false);
    const [cvisible, setCVisibility] = useState(false);
    const emailRegex = /\S+@\S+\.\S+/;
    const uNameRegex = /^[^ ]+$/;
    const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/;

    const changeData = (e) => {
        if(e.target.name === "Name"){
            setData({
              ...data,
              name: e.target.value
            });
            setMessage({
                ...error,
                Name: e.target.value.length === 0 ? "Name is required": e.target.value.length < 3 ? "Minimum length is 3 characters" : null
              });
        }
        else if(e.target.name === "userName"){
            setData({
              ...data,
              uname: e.target.value
            });
            setMessage({
                ...error,
                userName: e.target.value.length === 0 ? "User Name is required": e.target.value.length < 3 ? "Minimum length is 3 characters": uNameRegex.test(e.target.value) ? null : "User Name mustn't contain white spaces"
              });
            
          }
        else if(e.target.name === "userEmail"){
          setData({
            ...data,
            email: e.target.value
          });
    
          setMessage({
            ...error,
            userEmail: e.target.value.length === 0 ? "Email is required" : emailRegex.test(e.target.value) ? null : "Invalid pattern for email"
          });
        }
        else if(e.target.name === "userPassword"){
          setData({
            ...data,
            password: e.target.value
          });
          
          setMessage({
            ...error,
            userPassword: e.target.value.length === 0 ? "Password is required": passRegex.test(e.target.value) ? null : "Password length must be 8 or more characters, contains at least one lowercase, one uppercase, one digit and special character."
          });
        }
        else{
            setData({
              ...data,
              confirm: e.target.value
            });
      
            setMessage({
              ...error,
              userConfirm: e.target.value.length === 0 ? "Password is required": e.target.value === data.password ?  null: "Confirm Password must match password"
            });
          }
      }
      
      const history = useHistory()
      const Submit = (e) => {
        e.preventDefault()
        history.push("/login")
      }
return(
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          
            <Card className="shadow ">
            <div className="border border-3 border-dark"></div>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Registration</h2>
                  <p className=" mb-5 text-center">Please enter your data!</p>
                  <div className="mb-3">
                    <Form onSubmit={(e) => Submit(e)}>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" name="Name" placeholder="Enter Name" value={data.name} onChange={(e) => changeData(e)} />
                        <small className="text-danger">{error.Name}</small>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="uName">
                        <Form.Label className="text-center">User Name</Form.Label>
                        <Form.Control type="text" name="userName" placeholder="Enter User Name" value={data.uname} onChange={(e) => changeData(e)} />
                        <small className="text-danger">{error.userName}</small>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Email address</Form.Label>
                        <Form.Control type="email" name="userEmail" placeholder="Enter email" value={data.email} onChange={(e) => changeData(e)}/>
                        <small className="text-danger">{error.userEmail}</small>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label> <span className="password-toogle-icon" onClick={() => setPVisibility(!pvisible)}> {<i className = {pvisible ? "fa-solid fa-eye-slash":"fa-sharp fa-solid fa-eye"}></i> }</span>
                        <Form.Control type={pvisible ? "text" : "password"} name="userPassword" placeholder="Password" value={data.password} onChange={(e) => changeData(e)}/>
                        <small className="text-danger">{error.userPassword}</small>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Label>Confirm Password</Form.Label> <span className="password-toogle-icon" onClick={() => setCVisibility(!cvisible)}> {<i className = {cvisible ? "fa-solid fa-eye-slash":"fa-sharp fa-solid fa-eye"}></i> }</span>
                        <Form.Control type={cvisible ? "text" : "password"} name="userConfirm" placeholder="Confirm Password" value={data.confirm} onChange={(e) => changeData(e)}/>
                        <small className="text-danger">{error.userConfirm}</small>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      
                      <div className="d-grid">
                        <Button variant="dark" type="submit">Create Account</Button>
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
export default SignUp;