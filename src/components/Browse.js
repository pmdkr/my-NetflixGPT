
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/uesPopularMovies';
import useTopRatedMovies from '../hooks/uesTopRatedMovies';
import Footer from './Footer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <Footer/>
    </div>
  )
}

export default Browse