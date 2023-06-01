import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import "./styles/Roles.css";
import { useState, useEffect } from "react";
import { API } from '../api-service';

function Roles(){
  const { roleID } = useParams();
  const [roles, setRoles] = useState(["job 1", "job 2"]);

  useEffect(() => {
    (async () => {
      try {
        const roles = await API.getDataFromApi("http://localhost:8080/roles");
        roles ? setRoles(roles.data) : null;
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

  function getSingleJob(theRoleID){
    return(
      <Container className="mt-5">
        {roles.filter((item, index) => item._id == theRoleID)
          .map((jobFound, index) => {
            return (
              <div key={index}>
                <div className="role-name">{jobFound.role}</div>
                <div className="role-desc">{jobFound.roleDescription}</div>
              </div>
            )
          })}
      </Container>
    )
  }

  function getAllRoles(){
    return(
      <Container className="mt-5">
        {roles.map((item, index) => {
          return (
            <div className="role-name" key={index}>
              <Link to={`/roles/${item._id}`}>{item.role}</Link>
            </div>
          )
        })}
      </Container>
    )
  }

  return(
      <>
        {
          roleID ?
            (<div>
              {getSingleJob(roleID)}
              <Link to={"/roles"}>GO BACK</Link>
            </div>)
            : getAllRoles()
        }
      </>
  )

}

export default Roles;


// https://pokeapi.co/api/v2/pokemon/
  // async function getData(){
  //   // const axios = API("https://pokeapi.co/api/v2/pokemon/", );
  //   try{
  //     // const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
      
  //     // if (response.status == "200"){
  //     //   const {data: {abilities}} = response;
  //     //   console.log(abilities);
  //     //   //do stuff
  //     // }
  //     const response = await axios.get("http://localhost:8080/roles");
  //     // const {data: {message}} = response;
  //     console.log(response.data);
  //   }catch(err){
  //     console.log(err);
  //   }
  //   //set data
  //   // jobs = response.data;
  //   setJobs(response.data);
  // }