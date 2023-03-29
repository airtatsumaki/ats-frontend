import './styles/Roles.css'
import { useParams } from 'react-router-dom'

function Roles(){
  const { roleIndex } = useParams();
  const jobs = ["job 1", "job 2"];

  return(
    <>
      {roleIndex ? 
        <div className="role-name">{jobs[roleIndex]}</div> : 
        jobs && jobs.map((item, index) => {
          return <div className="role-name" key={index}>{item}</div>
        })
      }
    </>
  )

}

export default Roles