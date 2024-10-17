import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
