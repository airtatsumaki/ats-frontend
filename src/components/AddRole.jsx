import { Container, Form, Button} from 'react-bootstrap';
import { API } from '../api-service';
import { useNavigate } from "react-router-dom";
import './styles/AddRole.css';
import useForm from '../hooks/useForm';

function AddRole(){
  const navigate = useNavigate();
  const [formData, handleInput] = useForm({
    title: "",
    description: ""
  });
  
  async function handleSubmit(event){
    event.preventDefault();
    // console.log(formData);
    const result = await API.postDataToApi("http://localhost:8080/roles", formData);
    // console.log(result);
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
            <Form.Control name="title" value={formData.title} onChange={handleInput} type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDesc">
            <Form.Label>Role description</Form.Label>
            <Form.Control name="description" value={formData.description} onChange={handleInput} type="text" placeholder="Description" as="textarea" rows={3} />
          </Form.Group>
          <Button varient="secondary" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default AddRole;