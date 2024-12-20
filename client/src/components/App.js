import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Landing} />
          <Route path='/survey' exact component={Dashboard} />
          <Route path='/survey/new' component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
