import React from "react";
import { useDispatch } from "react-redux";

const JokeItem: React.FC = (item) => {
    const joke = Object.values(item).join('');
    const dispatch = useDispatch();
;
 
    const handleJoke = (item: string) => {
        dispatch({
            type: 'ADD_JOKE',
            payload: item
        });
    };

    const deleteJoke = (item: string) => {
        dispatch({
            type: 'DELETE_JOKE',
            payload: item
        });
    };

    

    return (
        <div className="joke__item">
            <div className="joke__item-text">
            {joke}
            </div>
            <button
            onClick={() => handleJoke(joke)}
            type="button"
            className="button"
            >
            Добавить в избранное
            </button>
            <button
            onClick={() => deleteJoke(joke)}
            type="button"
            className="button"
            >
            Удалить из избранного
            </button>
        </div>
    );
};

export default JokeItem;