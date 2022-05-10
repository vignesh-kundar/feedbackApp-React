import Card from "../shared/Card"
import { Link } from 'react-router-dom'

function AboutusPage() {
  return (
    <Card>
      <div className="about">

      <h2>This is the about page.</h2>
      <p>This is the Web app developed using react.js </p>
      <p>version : 1.0.0</p>
      <p>
        <Link to="/">
        Back to Home
        </Link>
      </p>
      </div>
    </Card>
     
    
  )
}

export default AboutusPage
