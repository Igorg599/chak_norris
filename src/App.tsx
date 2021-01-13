import React from "react";
import "./styles.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import JokeItem from "./components/JokeItem"; 

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [jokes, setJokes] = React.useState<Array<string>>([]);
  const [activeAcounter, setActiveCounter] = React.useState<boolean>(false);
  const [randomJokes, setRandomjokes] = React.useState<string>("Запустить");
  const items = useSelector(({reducer}: any ) => reducer.items);

  const deleteLoveJoke = (item: string) => {
    dispatch({
      type: 'DELETE_JOKE',
      payload: item
    });
  }

  const onDeleteAllJokes = () => {
    dispatch({
      type: 'DELETE_ALL_JOKES'
    });
  }

  const searchText = React.useCallback(() => {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then((data) => {
        setJokes(jokes.concat([data.data.value]));
      })
      .catch(() => alert(`Произошла http ошибка`));
  }, [setJokes, jokes]);

  const onLoadJoke = () => {
    searchText();
  };

  React.useEffect(() => {
    let timer: any;
    if (activeAcounter) {
      setRandomjokes("Остановить");
      timer = setTimeout(() => searchText(), 3000);
    } else {
      return;
    }
    return () => {
      if (timer) {
        setRandomjokes("Запустить");
        clearTimeout(timer);
      }
    };
  }, [activeAcounter, setActiveCounter, jokes, searchText]);

  return (
    <div className="App">
      <h1>ШУТЕЕЧКИ ОТ ЧАКА</h1>
      <div className="header">
        <button type="button" className="button" onClick={onDeleteAllJokes}>
          Удалить все любимые шутеечки
        </button>
        <button type="button" className="button" onClick={onLoadJoke}>
          Случайная шутеечка
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setActiveCounter(!activeAcounter)}
        >
          {randomJokes} шутеечки с интервалом
        </button>
      </div>
      <div className="joke">
        <div className="joke__love">
          {items.map((item: string) => (
            <div className="joke__love-item">
              <div key={Math.random()}>{item}</div>
              <button onClick={() => deleteLoveJoke(item)}
                type="button">Удалить любимую шутеечку</button>
            </div>
          ))}
        </div>
        <div className="joke__items">
          {jokes.map((item: string) => (
            <JokeItem {...item} key={Math.random()}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
