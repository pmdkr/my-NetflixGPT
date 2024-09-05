import { useDispatch } from "react-redux";
import { NOWPLAYING_URL, URL_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // Fetch data from imdb and save in store
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOWPLAYING_URL, URL_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addNowPlayMovies(json.results));

    }

    useEffect(() => {

        getNowPlayingMovies();
    }, [])

};

export default useNowPlayingMovies;