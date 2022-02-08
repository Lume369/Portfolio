import {useQuery} from "react-query";
import axios from "axios";
import {createContext} from "react";

export const context = createContext();

const APIProvider = (props) => {

	const {isFetched: jobIsFetched, error: jobError, data: jobData} = useQuery(
		// query key: an array with a name and a variable used in the endpoint
		"jobs",
		() => axios.get('/api/jobs'),
		{
			enabled: true,
		}
	);

	const {isFetched: projectIsFetched, error: projectError, data: projectData} = useQuery(
		// query key: an array with a name and a variable used in the endpoint
		"projects",
		() => axios.get('/api/projects'),
		{
			enabled: true,
		}
	);

	return (
		<context.Provider value={{
					jobIsFetched, jobError, jobData,
					projectIsFetched, projectError, projectData,					
		}}>
			{props.children}
		</context.Provider>
	)
};

export default APIProvider;