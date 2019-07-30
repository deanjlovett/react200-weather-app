import React from 'react';
import City from './components/City';
import Search from './components/Search';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>SDCS Weather Application</h1>
          <h4 className='text-center'>Always know if you'll need an umbrella!</h4> 
        </div>
        <Search />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <City />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
