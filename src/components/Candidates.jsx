import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { API } from '../api-service';

function Candidates() {
  // const candidates = ["person 1", "person 2"];
  const [candidates, setCandidates] = useState(["person 1", "person 2"]);

  useEffect(() => {
    (async () => {
      try {
        const can = await API.getDataFromApi("http://localhost:8080/candidates");
        console.log("line 13");
        console.log(can.data);
        can ? setCandidates(can.data) : null;
      } catch(err) {
        console.log(err);
      }
    })()
  }, []);

 //use useEffect to render candidates from DB
  return (
    <Container className="mt-5">
        {candidates && candidates.map((item, index) => {
          return (
              <div key={index}>
                {/* Add candidate cv path for view/ download */}
                {item.name}
              </div>
          )
        })}
    </Container>
  )
}

export default Candidates
