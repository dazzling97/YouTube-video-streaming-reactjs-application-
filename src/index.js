import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './Components/Search_bar'; 
import YTsearch from 'youtube-api-search';

const API_KEY ='AIzaSyDL8tKOY0dYj1GWVuIqrVoj7wjaciZjRPY';




class App extends React.Component {

    constructor(props){
        super(props);

        this.state = { videos : [] };
        YTsearch({key: API_KEY , term :'surfboards'} , (videos) => {

            this.setState({videos})

        });
    }

    render(){

    
    return (
        <div>


            <SearchBar />


        </div>
     );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
