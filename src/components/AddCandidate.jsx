import { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import { API } from '../api-service';
import './styles/AddRole.css';

function AddCandidate(){
  function addFile(event){
    console.log(event.target.files[0].name);
  }
  
  return (
    <Container className="mt-5">
        <Form className="left centerForm col-sm-12">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="person@website.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupBlurb">
              <Form.Label>Blurb</Form.Label>
              <Form.Control type="text" as="textarea" rows={3} placeholder="More details" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formGroupFile" className="mb-3">
              <Form.Label>Upload CV</Form.Label>
              <Form.Control type="file" onChange={addFile}/>
            </Form.Group>
          </Row>
          <Button className="mt-3" varient="secondary" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default AddCandidate;