import { useState } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import { API } from '../api-service';
import { redirect, useNavigate } from "react-router-dom";
import './styles/AddRole.css';

function AddRole(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  function handleTitle(event){
    const t = event.target.value;
    setFormData(prevData => ({
      ...prevData,
      title: t
    }));
  }
  function handleDescription(event){
    const d = event.target.value;
    setFormData(prevData => ({
      ...prevData,
      description: d
    }));
  }
  
  async function handleSubmit(event){
    event.preventDefault();
    // console.log(formData);
    const result = await API.postDataToApi("http://localhost:8080/roles", formData);
    console.log(result);
    //make POST route in API, pos this data to database, return to homepage
    
    if (result.status == 200){
      console.log("YES");
      navigate("/roles");
    }
  }
  
  return (
    <Container className="mt-5">
        <Form className="left centerForm col-sm-12" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>Role title</Form.Label>
            <Form.Control type="text" placeholder="Title" value={formData.title} onChange={handleTitle}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDesc">
            <Form.Label>Role description</Form.Label>
            <Form.Control as="textarea" rows={3} type="text" value={formData.description} onChange={handleDescription} placeholder="Description" />
          </Form.Group>
          <Button varient="secondary" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default AddRole;