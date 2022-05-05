import React from 'react';


const MovieList = (props) => {
    const FavoriteComponent=props.favouriteComponent
    return (
        <div>
            {props.movies.map((movie)=>(
                <div className='image-container d-flex flex-row justify-content-center m-3'>
                    <img src={movie.Poster} alt="movie">

                    </img>
                    <div
                        onClick={()=>props.handleFavouritesClick(movie)}
                        className='overlay d-flex flex-row align-items-center justify-content-center'>
                        <FavoriteComponent/>
                    </div>
                </div>
                )

            )}
        </div>
    );
};

export default MovieList;