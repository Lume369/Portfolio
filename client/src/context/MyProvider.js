import React, {useState} from 'react';

export const myProviderContext = React.createContext();

const MyProvider = (props) => {

	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);

	return (
		<myProviderContext.Provider value={{	
									count, setCount,
									isActive, setIsActive
								}}>
			{props.children}
		</myProviderContext.Provider>
	)
};

export default MyProvider;

export {MyProvider};