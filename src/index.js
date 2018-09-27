import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './Components/Search_bar'; 

const API_KEY ='AIzaSyDL8tKOY0dYj1GWVuIqrVoj7wjaciZjRPY';


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
