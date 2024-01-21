import React, {useContext} from 'react';
import style from './movie.module.css';
import {CheckoutContext} from './CheckoutContext';

const Movie = ({title,yearreleased,image,id}) => {

    const [favorites, setFavorites] = useContext(CheckoutContext);

    const addMovie = x => {
        x.preventDefault();
        if (favorites.length){
            if (!favorites.some(movie => movie.id === id)){
                setFavorites(x => [...x, {image: image, title: title, id: id}])
                document.getElementsByClassName("alert")[0].style.color = 'rgb(179, 180, 107)';
                document.getElementsByClassName("alert")[0].textContent = `Added ${title} to Checkout.`;

            } else {
                document.getElementsByClassName("alert")[0].style.color = 'rgb(184, 104, 104)';
                document.getElementsByClassName("alert")[0].textContent = `${title} is already added.`;
            } 
        } else {
            setFavorites(x => [...x, {image: image, title: title, id: id}])
            document.getElementsByClassName("alert")[0].style.color = 'rgb(179, 180, 107)';
            document.getElementsByClassName("alert")[0].textContent = `Added ${title} to Checkout.`;
        }
    }

    return (
        <div className = {style.movie}>
            <img className = {style.image} src = {image} alt = '' />
            <div className={style.description}>
                <div>
                    <h2>{title}</h2>
                    <h3 className = {style.year}>{yearreleased}</h3>
                </div>
                <button className={style.add} onClick={addMovie}>Add to Checkout</button>
            </div>
        </div>
    )
}

export default Movie;