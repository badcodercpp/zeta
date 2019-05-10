import React from 'react';
import logo from './logo.svg';
import './App.css';
import FavouriteScreen from './container/favouriteScreenContainer';
import FoodList from './container/foodListContainer';
import Header from './container/headerContainer';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Header />
        <FavouriteScreen />
        <FoodList />
      </div>
    </Provider>
  );
}

export default App;
