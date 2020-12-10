//import BannerImage from '../View/BannerImage';
import Barcharts from './barCharts'
import GraphEntry from '../View/GraphEntry';

function ChartPage() {
    return (
      <div className="App">
          
        <header className="App-header">
          <BannerImage />
          <div>
            <h1> Welcome to Molecules </h1>
            <h3> Your path to healthy lifestyle </h3>
            < GraphEntry src="Vegelot.jpeg" location="Location" caption="Caption"/ >
          </div>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      <div> 
      <Barcharts/> 
      </div>
    
      </div>
    );
  }
export default ChartPage;