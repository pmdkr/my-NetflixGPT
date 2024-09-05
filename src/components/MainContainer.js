import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle';


const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayMovies);
    // console.log(movies);
    if (movies === null) return;

    const mainMovies = movies[0];
    // console.log(mainMovies);
    const {original_title,overview,id}=mainMovies;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>

            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer