import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { POPULAR_OPTIONS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{ 
    const dispatch=useDispatch();

    useEffect(()=>{
        getPopularMoves();

    },[]);

    const getPopularMoves= async()=>{
        const data= await fetch(POPULAR_URL, POPULAR_OPTIONS);
        const json= await data.json();
        // console.log(json.results);
        dispatch((addPopularMovies(json.results)));

        
    }



}
export default usePopularMovies;