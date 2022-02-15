import { useContext } from "react";
import { myProviderContext } from "../../context/MyProvider";
import { NavLink } from "react-router-dom";
import Bar from "../atoms/Navigation/Bar";
import Hamburger from "../atoms/Navigation/Hamburger";
import Nav from "../atoms/Navigation/Nav";
import NavList from "../atoms/Navigation/NavList";
import UlNav from "../atoms/Navigation/UlNav";
import NavLinks from "../atoms/Navigation/NavLinks";



const Navbar = () => {
	const {isShown, setIsShown} = useContext(myProviderContext);

	return (
		<Nav active={isShown}>
			<UlNav active={isShown}>
				<NavList><NavLink style={NavLinks} to="/" onClick={() => setIsShown(!isShown)}>Home</NavLink></NavList>
				<NavList><NavLink style={NavLinks} to="/about" onClick={() => setIsShown(!isShown)}>About</NavLink></NavList>
				<NavList><NavLink style={NavLinks} to="/contact" onClick={() => setIsShown(!isShown)}>Contact</NavLink></NavList>
			</UlNav>
			<Hamburger onClick={() => setIsShown(!isShown)}>
				<Bar></Bar>
				<Bar></Bar>
				<Bar></Bar>
			</Hamburger>
		</Nav>
	)
}

export default Navbar;