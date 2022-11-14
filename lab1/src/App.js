
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import logoIron from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

function App() {
  return (
    <div className="App">
      <div className="Section1">
        <div className="imgCon">
          <img src={logoIron} className="" alt="logo" />
          <img src={menu} className="" alt="menu" />
        </div> 

        <div className="textCon">
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>You will learn to use <br></br>the most popular frontend library<br></br>and become a super Ninja developr</p>
          <h2 id="Awesome">Awesome!</h2>
        </div>
      </div>


      <div className="Section2">
        <div>
          <img src={icon1} alt="icon1" />
          <div className="textOrder">
            <h5>Declarative</h5>
            <p>React makes it<br></br>paintless to create<br></br>interactive UIs.</p>
          </div>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <div className="textOrder">       
            <h5>Components</h5>
            <p>Build encapsulated<br></br>components that<br></br>manage their state</p>
          </div>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <div className="textOrder">
            <h5>JSX</h5>
            <p>Statically-typed<br></br>designed to run on<br></br>modern browsers.</p>
          </div>
        </div>
        <div>       
          <img src={icon4} alt="icon4" />
          <div className="textOrder">
            <h5>Single-Way</h5>
            <p>A set of immutable<br></br>values are passed to<br></br>the component's.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
