// import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import Banner from './component/banner';
import Skill from "./component/skill";
import Projects from "./component/project";
import Footer from "./component/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
