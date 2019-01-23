import React from 'react';

export class Weather extends React.Component {
      
    state = {
        weather: 'Loading...',
        chosenState: 'Boise'
    }

    render() {
        // add a quote below H1 in a H1 Tag
    return (
        <div>
            <h1 className="text-white text-center display-2">{this.props.state} {this.state.weather}</h1>
        </div>
    );
    }

    async componentWillReceiveProps(nextProps) {
        this.setState({ weather: 'Loading...'}, 
        () => {
            this.componentDidMount()
        })
    }

    async componentDidMount() {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.state.toLowerCase()}&APPID=4b8961cd250024f0c939c7494c8243e1`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({weather: data.weather[0].main});
        })
        .catch(err => {
            this.setState({weather: "Location Not Found."});
            return;
        });
    }
};