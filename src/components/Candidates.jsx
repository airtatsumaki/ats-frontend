import { Container } from "react-bootstrap";

function Candidates() {
  const candidates = ["person 1", "person 2"];

 //use useEffect to render candidates from DB
  return (
    <Container style={{paddingTop: "50px"}}>
        {candidates && candidates.map((item, index) => {
          return (
            
              <div key={index}>
                {item}
              </div>
          )
        })}
    </Container>
  )
}

export default Candidates
