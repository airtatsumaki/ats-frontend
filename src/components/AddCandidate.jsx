import { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';
import { API } from '../api-service';
import { useNavigate } from "react-router-dom";
import './styles/AddRole.css';

function AddCandidate(){
  const navigate = useNavigate();
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    blurb: "",
    cvpath: ""
  });

  function handleInput(event){
    let { name, value } = event.target;
    // console.log(name, value);
    if (name == "cvpath" && inputRef.current.files[0].name){
      value = inputRef.current.files[0];
      // value = event.target.files[0].name;
    }
    // else [name]: value
    // if event.target.files[0].name == null/ "", value = ""
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  // function addFile(event){
  //   // if event.target.files[0].name == null/ "", skip
  //   console.log(event.target.files[0].name);
  //   const file = event.target.files[0].name;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     cvpath: file
  //   }));
  // }

  async function handleSubmit(event){
    event.preventDefault();
    const myForm = new FormData();
    Object.keys(formData).forEach(key => myForm.append(key, formData[key]));
    myForm.set('cvpath', formData.cvpath, formData.cvpath.name);
    console.log(...myForm);
    const result = await API.postDataToApi("http://localhost:8080/upload", myForm);
    console.log(result);
    // if (result.status == 200){
    //   console.log("YES");
    //   navigate("/candidates");
    // }
  }
  
  return (
    <Container className="mt-5">
        <Form className="left centerForm col-sm-12" encType="multipart/form-data" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" onChange={handleInput} value={formData.name} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="person@website.com" onChange={handleInput} value={formData.email} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupBlurb">
              <Form.Label>Blurb</Form.Label>
              <Form.Control type="text" name="blurb" as="textarea" rows={3} placeholder="More details" onChange={handleInput} value={formData.blurb}/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="formGroupFile" className="mb-3">
              <Form.Label>Upload CV</Form.Label>
              <Form.Control type="file" name="cvpath" onChange={handleInput} ref={inputRef}/>
            </Form.Group>
          </Row>
          <Button className="mt-3" varient="secondary" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default AddCandidate;