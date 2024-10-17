// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner' // Assuming the Loader component hasn't updated yet

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamCards: [], // Fix typo
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const teamsApiUrl = 'https://apis.ccbp.in/ipl'

    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const updateTeamData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      imgUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamCards: updateTeamData, // Fix typo
      isLoading: false,
    })
  }

  renderTeamCards = () => {
    const {teamCards} = this.state // Fix typo
    return (
      <ul className="team-card-list">
        {teamCards.map(eachteam => (
          <TeamCard teamDetails={eachteam} key={eachteam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      {/* No need to modify this unless issues arise */}
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">Ipl Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamCards()}
      </div>
    )
  }
}

export default Home
