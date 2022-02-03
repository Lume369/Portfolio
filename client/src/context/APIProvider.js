import {useQuery} from "react-query";
import axios from "axios";
import {createContext} from "react";

export const context = createContext();

const APIProvider = (props) => {

	const {isFetched: usersIsFetched, error: usersError, data: usersData} = useQuery(
		// query key: an array with a name and a variable used in the endpoint
		"jobs",
		() => axios.get('/api/jobs'),
		{
			enabled: true,
		}
	);

	return (
		<context.Provider value={{usersIsFetched, usersError, usersData}}>
			{props.children}
		</context.Provider>
	)
};

export default APIProvider;