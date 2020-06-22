import React from 'react';
import CountUp from 'react-countup';

import './stats.styles.scss';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      people: 200000,
      articles: 90,
      students: 80,
      countries: 140
    }
  }

  render() {
    const { people, articles, students, countries } = this.state;
    return (
      <div className='stats'>
        <div className='stat'>
          <h1 className='count'><CountUp end={ people } duration={ 2.75 } />+</h1>
          <span className='label'>People Reached</span>
        </div>
        <div className='stat'>
          <h1 className='count'><CountUp end={ articles } duration={ 2.75 } />+</h1>
          <span className='label'>Articles Published</span>
        </div>
        <div className='stat'>
          <h1 className='count'><CountUp end={ students } duration={ 2.75 } />+</h1>
          <span className='label'>Students Worked With</span>
        </div>
        <div className='stat'>
          <h1 className='count'><CountUp end={ countries } duration={ 2.75 } />+</h1>
          <span className='label'>Countries Reached</span>
        </div>
      </div>
    );
  }
}

export default Stats;