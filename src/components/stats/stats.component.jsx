import React from 'react';

import './stats.styles.scss';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      pcounter: 0,
      acounter: 0,
      scounter: 0,
      ccounter: 0,
      people: 200000,
      articles: 90,
      students: 80,
      countries: 140
    }
  }

  pcount = () => {
    let delay = 4;
    let times = 1000 / delay;
    let increment = parseInt(this.state.people / times + 11);
    if (increment < 1) {
      increment = 1;
      delay = 2000 / this.state.people;
    }

    setTimeout(() => {
      this.setState((prevState) => ({
        pcounter: prevState.pcounter + increment
      }));

      if (this.state.pcounter >= this.state.people) {
        this.setState({ pcounter: this.state.people });
        return;
      }
      this.pcount();
    }, delay);
  };

  acount = () => {
    let delay = 4;
    let times = 1000 / delay;
    let increment = parseInt(this.state.articles / times);
    if (increment < 1) {
      increment = 1;
      delay = 2000 / this.state.articles;
    }
    setTimeout(() => {
      this.setState((prevState) => ({
        acounter: prevState.acounter + increment
      }));

      if (this.state.acounter >= this.state.articles) {
        this.setState({ acounter: this.state.articles });
        return;
      }
      this.acount();
    }, delay);
  };

  scount = () => {
    let delay = 4;
    let times = 1000 / delay;
    let increment = parseInt(this.state.students / times);
    if (increment < 1) {
      increment = 1;
      delay = 2000 / this.state.students;
    }

    setTimeout(() => {
      this.setState((prevState) => ({
        scounter: prevState.scounter + increment
      }));

      if (this.state.scounter >= this.state.students) {
        this.setState({ scounter: this.state.students });
        return;
      }
      this.scount();
    }, delay);
  };

  ccount = () => {
    let delay = 4;
    let times = 1000 / delay;
    let increment = parseInt(this.state.countries / times);
    if (increment < 1) {
      increment = 1;
      delay = 2000 / this.state.countries;
    }

    setTimeout(() => {
      this.setState((prevState) => ({
        ccounter: prevState.ccounter + increment
      }));

      if (this.state.ccounter >= this.state.countries) {
        this.setState({ ccounter: this.state.countries });
        return;
      }
      this.ccount();
    }, delay);
  };

  componentDidMount() {
    this.pcount();
    this.acount();
    this.scount();
    this.ccount();
  }

  render() {
    const { pcounter, acounter, scounter, ccounter } = this.state;
    return (
      <div className='stats'>
        <div className='stat'>
          <h1 className='count'>{ pcounter }+</h1>
          <span className='label'>People Reached</span>
        </div>
        <div className='stat'>
          <h1 className='count'>{ acounter }+</h1>
          <span className='label'>Articles Published</span>
        </div>
        <div className='stat'>
          <h1 className='count'>{ scounter }+</h1>
          <span className='label'>Students Worked With</span>
        </div>
        <div className='stat'>
          <h1 className='count'>{ ccounter }+</h1>
          <span className='label'>Countries Reached</span>
        </div>
      </div>
    );
  }
}

export default Stats;