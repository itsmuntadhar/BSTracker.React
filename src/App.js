import HomeView from "./Views/HomeView";
import NotFound from "./Views/NotFound";
import SVG from "./Assets/background.svg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NewBullshitView from "./Views/NewBullshitView";
import BullshitView from "./Views/BullshitView";

function App() {
    return (
        <Router>
            <div className="relative h-screen text-gray-800">
                <img src={SVG} alt="header wave" className="absolute inset-0 w-full h-1/2 lg:h-3/4" style={{ zIndex: -1, transform: "translateY(-2px)" }} />
                <div className="container p-4 h-screen mx-auto">
                    <Link to="/">
                        <h1 className="text-center my-2 font-bold text-6xl text-yellow-200">Bullshit Tracker</h1>
                    </Link>
                    <Switch>
                        <Route path="/" exact component={HomeView} />
                        <Route path="/new" exact component={NewBullshitView} />
                        <Route path="/:id" exact component={BullshitView} />
                        <Route path="/404" component={NotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
