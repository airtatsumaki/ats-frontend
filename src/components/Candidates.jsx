import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from '../api-service';

function Candidates() {
  // const candidates = ["person 1", "person 2"];
  const { candidateID } = useParams();
  const [candidates, setCandidates] = useState(["person 1", "person 2"]);

  useEffect(() => {
    (async () => {
      try {
        const can = await API.getDataFromApi("http://localhost:8080/candidates");
        console.log(can.data);
        can ? setCandidates(can.data) : null;
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

  function getSingleCandidates(theCandidateID){
    return (
      <Container className="mt-5">
        {candidates.filter((item, index) => item._id == theCandidateID)
          .map((candidateFound, index) => {
            return (
              <div key={index}>
                <div className="candidate-name">{candidateFound.name}</div>
                <div className="candidate-email">{candidateFound.email}</div>
                <div className="candidate-blurb">{candidateFound.blurb}</div>
                <div className="candidate-cvPatch">
                {
                  candidateFound.cvPath ? 
                    <a href={"http://localhost:8080/downloadFile/" + candidateFound.cvPath}>Download CV as a file ({candidateFound.cvPath})</a>
                  : ""}
                </div>
              </div>
            );
          })}
      </Container>
    );
  }

  function getAllCandidates(){
    return (
      <Container className="mt-5">
        {candidates.map((item, index) => {
          return (
            <div className="candidate-name" key={index}>
              <Link to={`/candidates/${item._id}`}>{item.name}</Link>
            </div>
          )
        })}
      </Container>
    );
  }

 //use useEffect to render candidates from DB
  return ( 
    <>
      {
        candidateID ? 
          (<div>
              {getSingleCandidates(candidateID)}
              <Link to={"/candidates"}>GO BACK</Link>
            </div>)
            : getAllCandidates()
      }
    </>
  )
 
 // return (
  //   <Container className="mt-5">
  //       {candidates && candidates.map((item, index) => {
  //         return (
  //             <div key={index}>
  //               {/* Add candidate cv path for view/ download */}
  //               {item.name}
  //             </div>
  //         )
  //       })}
  //   </Container>
  // )
}

export default Candidates
