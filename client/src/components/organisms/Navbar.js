import {Link} from "react-router-dom";
import Bar from "../atoms/Navigation/Bar";
import Hamburger from "../atoms/Navigation/Hamburger";
import Nav from "../atoms/Navigation/Nav";
import NavList from "../atoms/Navigation/NavList";
import UlNav from "../atoms/Navigation/UlNav";
import { useContext } from "react";
import {myProviderContext} from "../../context/MyProvider";



const Navbar = () => {
	const {isActive, setIsActive} = useContext(myProviderContext)

	return (
		<Nav>
			<UlNav active={isActive}>
				<NavList><Link to="/" onClick={() => setIsActive(!isActive)}>Home</Link></NavList>
				<NavList><Link to="/about" onClick={() => setIsActive(!isActive)}>About</Link></NavList>
				<NavList><Link to="/contact" onClick={() => setIsActive(!isActive)}>Contact</Link></NavList>
			</UlNav>
			<Hamburger onClick={() => setIsActive(!isActive)}>
				<Bar></Bar>
				<Bar></Bar>
				<Bar></Bar>
			</Hamburger>
		</Nav>
	)
}

export default Navbar;