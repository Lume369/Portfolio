import React, {useState} from 'react';

export const context = React.createContext();

const MyProvider = (props) => {

	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);

	return (
		<context.Provider value={{	
									count, setCount,
									isActive, setIsActive
								}}>
			{props.children}
		</context.Provider>
	)
};

export default MyProvider;

export {MyProvider};