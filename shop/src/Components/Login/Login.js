import React from 'react';
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Form>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
        <Input type="password" name="password" placeholder="Enter Your Password" />
        </FormGroup>
      </Col>
    </Row>
    <Col md={6}> 
        <Button variant="primary"> Sign In </Button>
    </Col>
    
</Form>

<Form>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
        <Input type="password" name="password" placeholder="Enter Your Password" />
        </FormGroup>
      </Col>
    </Row>
    <Col md={6}> 
        <Button variant="primary"> Sign Up </Button>
    </Col>
    
</Form>
</div>
    );
  }
}

export default Login;