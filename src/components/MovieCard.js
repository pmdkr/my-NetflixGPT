import { POSTER_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
            <img
                className="pr-4"
                alt="movie poster"
                src={POSTER_IMG_URL + posterPath}
            />
        </div>
    );
};

export default MovieCard;
