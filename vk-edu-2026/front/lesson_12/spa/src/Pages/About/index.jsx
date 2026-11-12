import { useParams } from 'react-router-dom'

const About = () => {
  let params = useParams();
  const aboutID = params.aboutID

  return (
    <div>
      <h1>About</h1>
      {aboutID && (<p>About ID: {params.aboutID}</p>)}
    </div>
  )
}

export default About
