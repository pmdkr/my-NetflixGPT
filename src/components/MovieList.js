import { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesList }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const onWheel = (e) => {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY * 2; // Adjust the multiplier for sensitivity
            };

            // Attach the wheel event listener with `passive: false` to prevent default behavior
            scrollContainer.addEventListener("wheel", onWheel, { passive: false });

            // Cleanup event listener
            return () => scrollContainer.removeEventListener("wheel", onWheel);
        }
    }, []);

    if (!moviesList) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl text-white py-4">{title}</h1>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-scroll hide-scrollbar"
            >
                <div className="flex">
                    {moviesList.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesList;
