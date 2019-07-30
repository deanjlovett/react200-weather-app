import React from 'react';
import { searchCity, getWeather } from './searchAction';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    //console.log('   this.props: ', this.props);
    //console.log('     dispatch: ', dispatch);
    
    const { value } = event.target;

    //console.log(' event.target: ', event.target);
    //console.log('        value: ', value);

    dispatch(getWeather(value));
  }

  handleSearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  }

  handleSubmit() {
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    // These values were provided by connect()
    var styles = {
      marginLeft: '2px', marginRight: '2px',
    };
    const { value } = this.props;
    console.log('search value: ', value);
    console.log(' search city: ', this.props.city);
    const elements =['San Diego','Encinitas','Escondido','Poway','Houston','Cypress'];
    return (
      <div style={ { marginTop: '20px', marginBottom: '20px' } }>
        <div className='btn-group' role='group'>
          {elements.map((e) => {   
            return <div style={styles}>
              <button 
                type='button' 
                className='btn btn-primary' 
                onClick={ this.handleCity } 
                value={e} 
                name={e}
              >
              {e}
              </button>
            </div> 
          })}
        </div>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Enter Your City' value={ value } onChange={ this.handleSearch } />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSubmit }>Go!</button>
          </div>
        </div>
      </div>
    );
  }
}