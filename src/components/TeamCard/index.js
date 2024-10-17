// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imgUrl} = teamDetails

  return (
    <Link exact to={`/team-matches/${id}`} className="team-link">
      <li className="team-card-container">
        <img src={imgUrl} alt={`${name}`} className="team-banner" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
