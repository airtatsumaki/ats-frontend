import "./styles/Roles.css"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { API } from '../api-service';

function Roles(){
  const { roleIndex } = useParams();
  const [jobs, setJobs] = useState(["job 1", "job 2"]);

  useEffect(() => {
    (async () => {
      try {
        const roles = await API.getDataFromApi("http://localhost:8080/roles");
        roles ? setJobs(roles.data) : null;
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

  function getSingleJob(theIndex){
    return(
      <div>
        {jobs.filter((item, index) => theIndex == index)
          .map((jobFound, index) => {
            return (
              <div key={index}>
                <div className="role-name">{jobFound.role}</div>
                <div className="role-desc">{jobFound.roleDescription}</div>
              </div>
            )
          })}
      </div>
    )
  }

  function getAllRoles(){
    return(
      <div>
        {jobs.map((item, index) => {
          return (
            <div className="role-name" key={index}>
              <Link to={`/roles/${index}`}>{item.role}</Link>
            </div>
          )
        })}
      </div>
    )
  }

  return(
      <>
        {
          roleIndex ?
            (<div>
              {getSingleJob(roleIndex)}
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