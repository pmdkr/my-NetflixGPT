import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { URL_OPTIONS } from "../utils/constants";

const useMoviesTrailer = (movieId)=>{

    const dispatch = useDispatch();
    
  
    const getMovieVideo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, URL_OPTIONS);
      const json = await data.json();
      // console.log(json);
  
      const filterVideo = json.results?.filter((video) => video.type === 'Trailer');
      // console.log(filterVideo);
  
      const trailer = filterVideo?.length ? filterVideo[0] : json.results[0];
      // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
  
    }
  
    useEffect(() => {
  
      getMovieVideo();
    }, []);

};

export default useMoviesTrailer;