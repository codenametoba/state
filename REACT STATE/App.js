import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I'm a software developer.",
        imgSrc: "https://example.com/avatar.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      intervalId: null,
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(this.updateTimeSinceMounted, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMounted = () => {
    this.setState((prevState) => ({
      timeSinceMounted: prevState.timeSinceMounted + 1
    }));
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt="Avatar" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since component was mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
