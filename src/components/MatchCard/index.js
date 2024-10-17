// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className={`match-card-container ${matchStatus}`}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
