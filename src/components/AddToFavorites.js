import React from 'react';

const AddToFavorites = () => {
    return (
        <div className='d-flex row bg-black h-25'>

            <span className='text-primary'>Add to Favourites</span>
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-heart-fill'
                fill='red'
            >
                <path
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                />
            </svg>
            {/*<img className='h-25 w-25 d-flex flex-row align-items-center ' src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-red-heart-icon-isolated-png-image_5045156.jpg" alt="img"/>*/}
            {/*<p className='h-25 text-primary'>Add to favorite</p>*/}

        </div>
    );
};

export default AddToFavorites;