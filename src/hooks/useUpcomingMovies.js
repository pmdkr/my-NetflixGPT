import { useEffect } from "react"
import { UPCOMING_MOVIES_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const getUpcomingMovies= async()=>{

        const data= await fetch(UPCOMING_MOVIES_URL,UPCOMING_MOVIES_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch((addUpcomingMovies(json.results)));
    }

    useEffect(()=>{

        getUpcomingMovies();
    },[])

    
}

export default useUpcomingMovies;

