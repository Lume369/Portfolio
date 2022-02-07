import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
	html {
		height: 100%;
	};

	body {
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		margin: 0;
		height: 100%;
	};

	li {
		list-style: none;
	};

	a {
		text-decoration: none;
	}

`;

export default GlobalStyle;