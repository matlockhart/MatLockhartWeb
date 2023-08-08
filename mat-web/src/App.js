import TopMenu from "./TopMenu/TopMenu";

import profilePicture from "./Media/Mat_NoBackground.png";
import './App.css';

function App() {
  return (
      <div className="App">
          <div className="App-body">
              <header>
                  <TopMenu />
              </header>
              <div className="Body">
                  <div className="Intro">
                      <span>Hi,</span>
                      <br />
                      <span>My name is Mat,</span>
                      <br />
                      <span>I do Web Development</span>
                  </div>
                  <div className="Pic-container">
                      <img src={profilePicture} alt="Mat Lockhart" width="1000" height="1500" />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

