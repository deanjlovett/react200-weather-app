import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // These values were provided by connect()
    const { history } = this.props;
    return (
      <div>
        <h5 className='card-header bg-primary mb-4'>Search History</h5>
        <div className='card-body'>
          <ul className='list-unstyled'>
            { history.map((histories, index) => (
              <li key={ index }>
                <p>{ histories.cityInput } - { histories.date }</p>
              </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}