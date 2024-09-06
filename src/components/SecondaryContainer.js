import React from 'react'
import MoviesList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  // const movies = useSelector((store) => store.movies);
  const ListOfMovies = useSelector((store) => store.movies?.nowPlayMovies);
  const ListOfPopularMovies = useSelector((store) => store.movies?.PopularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  // console.log(ListOfMovies);
  if (!ListOfMovies) {
    return <div>Loading...</div>;
  }
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20  pl-12 overflow-x-hidden'>
        <MoviesList title={"Now playing"} moviesList={ListOfMovies} />
        <MoviesList title={"Top Rated"} moviesList={topRatedMovies} />
        <MoviesList title={"Popular movies"} moviesList={ListOfPopularMovies} />
        <MoviesList title={"Upcoming Movies"} moviesList={upcomingMovies} />


      </div>



      {/**
       * MoviesList - popular
       * MoviesList - trending 
       * MoviesList - nowplaying
       *  
       */}
    </div>
  )
}

export default SecondaryContainer