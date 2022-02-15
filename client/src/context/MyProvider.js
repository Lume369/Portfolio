import React, {useState} from 'react';

export const myProviderContext = React.createContext();

const MyProvider = (props) => {

	const [count, setCount] = useState(0);
	const [jobData, setJobData] = useState('');
	const [isShown, setIsShown] = useState(false);

	// Content & show content created for InterestedIn
	const [content, setContent] = useState('');
	const [showContent, setShowContent] = useState(false);

	return (
		<myProviderContext.Provider value={{	
									count, setCount,
									jobData, setJobData,
									isShown, setIsShown,
									content, setContent,
									showContent, setShowContent
								}}>
			{props.children}
		</myProviderContext.Provider>
	)
};

export default MyProvider;

export {MyProvider};