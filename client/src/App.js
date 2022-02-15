import {Route, Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/organisms/Footer";
import AppStyle from "./components/atoms/AppStyle";
import AppHeader from "./components/atoms/AppHeader";

const App = () => {

	return (
		<AppStyle>
			<AppHeader>
				<Navbar/>
			</AppHeader>

			

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/contact" component={Contact}/>
			</Switch>

			<Footer/>
		</AppStyle>
	)
};

export default App;
