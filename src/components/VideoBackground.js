import useMoviesTrailer from '../hooks/useMoviesTrailer'
import { useSelector } from 'react-redux';


const VideoBackground = ({ movieId }) => {
  useMoviesTrailer(movieId);
  const trailerV = useSelector((store) => store.movies?.trailerVideo);
  // console.log(trailerV);


  return (
    <div className=''>
      <iframe className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerV?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerV?.key}&si=ZPEz4O0XyOWwIQHZ`}
        
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share" >

      </iframe>
    </div>
  )
}

export default VideoBackground