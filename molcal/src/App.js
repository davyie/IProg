import './App.css'; // add script like in the previous html file
import Auth from './auth';
//Presenter
import SaveMolecules from './Presenter/savePage.js';
import StoredMolecules from './Presenter/storedPage.js';
import Search from './Presenter/search.js';
//import ChartPage from './components/chartPage';
import Details from './Presenter/details';

import BarChart from './components/barCharts';

//import Add from './Presenter/add.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App= ({model}) => 
<Router>
      <div className = "flexContainer"> 
        <nav>
          <ul className = "nav">
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/">Search</Link></li>
            {/* <li><Link to="/firebase">firebase</Link></li> */}
            <li><Link to="/graph">Graph</Link></li>
            {/* <li><Link to="/save">Save</Link></li> */}
            <li><Link to="/stored">Stored</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </nav>

       {/* <auth 
       email={email}
       setEmail={setEmail}
       password={password}
       setPassword={setPassword}
       createLogin={createLogin}
       createSignup={createSignup}
       existingAccount={existingAccount}
       setExistingAccount={setExistingAccount}
       emilError={emailError}
       passwordError={passwordError}
       handleLogout={handleLogout}/> */}


       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*Route = Show*/}
          <Route path="/graph"> 
            <BarChart model ={model} />
          </Route>
          <Route path="/save">
            <SaveMolecules model={model}/>
          </Route>
          <Route path="/stored">
            <StoredMolecules model={model} />
          </Route>
          <Route path="/details">
            <Details model={model}/>
          </Route>
          <Route path="/Login">
            <Auth/>
          </Route>
          <Route path="/">
            <Search model = {model} />
          </Route>
          
        </Switch>
      </div>
</Router>

export default App;
