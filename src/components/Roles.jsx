import "./styles/Roles.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

function Roles(props){
  const { roleIndex } = useParams();
  
  let jobsArr = ["job 1", "job 2"];
  const [jobs, setJobs] = useState([]);

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

  useEffect(() => {
    async function getData(){
      try{
        const response = await axios.get("http://localhost:8080/roles");
        console.log(response.data);
        setJobs(response.data);
      }catch(err){
        console.log(err);
      }
    }
    // roleIndex ? setRolesPage(1) : setRolesPage(0);
    console.log(roleIndex);
    getData();
  }, []);

  function getSingleJob(theIndex){
    return(
      <div>
        {jobs.filter((theJob, index)=> index == theIndex).map((jobFound, index) => (
          <div className="role-name" key={index}>{jobFound.role}</div>
        ))}
      </div>
    )
  }

  function getAllRoles(){
    return(
      <div>
        {jobs.map((item, index) => {
          return (
            <div className="role-name" key={index}>
              <a href={`/roles/${index}`}>{item.role}</a>
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
              <a href={"/roles"}>GO BACK</a>
            </div>)
            : getAllRoles()
        }
      </>
  )

}

export default Roles