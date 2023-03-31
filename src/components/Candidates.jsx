function Candidates() {
  const candidates = ["person 1", "person 2"];

 //use useEffect to render candidates from DB
  return (
    <div>
        {candidates && candidates.map((item, index) => {
          return (
            <div key={index}>
              {item}
            </div>
          )
        })}
    </div>
  )
}

export default Candidates
