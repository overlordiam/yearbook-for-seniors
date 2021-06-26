import "./App.css";
import HomePage from "./Components/homePage/homePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ClassA from "./Components/Class-A/ClassA";
import ClassB from "./Components/Class-B/ClassB";
import Responsive from "./responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
     
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Class-A" component={ClassA} />
            <Route exact path="/Class-B" component={ClassB} />
          </Switch>
          <Footer />
        
      </div>
    </Router>
  );
}

export default App;
