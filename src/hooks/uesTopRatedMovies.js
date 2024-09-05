import { useEffect } from "react";
import { TOP_RATED_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        getTopRatedMovies();


    },[]);

    const getTopRatedMovies= async()=>{

        const data= await fetch(TOP_RATED_URL, TOP_RATED_OPTIONS);
        const json= await data.json();
        dispatch(addTopRatedMovies(json.results));
    }


}
export default useTopRatedMovies;