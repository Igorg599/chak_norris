import React from "react";
import { useDispatch } from "react-redux";

const JokeItem: React.FC = (item) => {
    const joke = Object.values(item).join('');
    const dispatch = useDispatch();
    const [jokeSave, setJokeSave] = React.useState<boolean>(true);
    const [titleButton, setTitleButton] = React.useState<string>('Добавить в избранное');
    console.log(jokeSave);
 
    const handleJoke = (item: string) => {
        setJokeSave(jokeSave);
        if(!jokeSave) {
            dispatch({
                type: 'DELETE_JOKE',
                payload: item
              });
            setTitleButton('Добавить в избранное');
        } else {
            dispatch({
                type: 'ADD_JOKE',
                payload: item
              });
            setTitleButton('Удалить из избранного');
        }
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
            {titleButton}
            </button>
        </div>
    );
};

export default JokeItem;