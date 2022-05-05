import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import MovieListHead from "./components/MovieListHead";
import SearchBox from "./components/SearchBox";
import AddToFavorites from "./components/AddToFavorites";
import RemoveFavorites from "./components/RemoveFavorites";

function App() {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4cb655e2`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };
    const addFavoriteMovie = (movie) => {
        const newFavoriteList = [...favourites, movie]
        setFavourites(newFavoriteList)
    }
    const removeFavoriteMovie = (movie) => {
        const newFavoriteList = favourites.filter((favorite) => favorite.imdbID !== movie.imdbID)
        setFavourites(newFavoriteList)
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);
    return (
        <div className='container-fluid movie-app'>
            <div className='d-flex flex-column align-items-center mt-4 mb-4'>
                <MovieListHead heading='Movies'/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='d-flex flex-row'>
                <MovieList
                    movies={movies}
                    favouriteComponent={AddToFavorites}
                    handleFavouritesClick={addFavoriteMovie}
                />
            </div>
            <div className='d-flex flex-row'>
                <MovieListHead heading='Favourites'/>
            </div>
            <div className='d-flex flex-row'>
                <MovieList
                    movies={favourites}
                    favouriteComponent={RemoveFavorites}
                    handleFavouritesClick={removeFavoriteMovie}
                />
            </div>
        </div>
    );

}

export default App;
