import React from 'react';

export class Weather extends React.Component {
      
    isLoading = true;
    
    state = {
        temp: '',
        weather: '',
        chosenState: 'Boise'
    }

    toFahrenheit(degrees) {
        degrees = Number.parseInt(degrees);
        return (degrees * (9/5)) - 459.67;
    }

    toCapitalized(stringToEdit) {
        return stringToEdit.charAt(0).toUpperCase() + stringToEdit.slice(1).toLowerCase();
    }

    doAsync() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.chosenState.toLowerCase()}&APPID=4b8961cd250024f0c939c7494c8243e1`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.isLoading = false;
            this.setState({weather: data.weather[0].main, temp: data.main.temp});
        })
        .catch(err => {
            this.isLoading = false;
            this.setState({weather: "Location Not Found."});
            return;
        });
    }

    componentDidMount() {
        this.doAsync();
    }

    componentDidUpdate() {
        if (this.isLoading === true) {
            this.doAsync();
        } else {
            this.isLoading = true;
        }
    }

    render() {
        if (this.isLoading === false) {
            if (this.state.weather === "Location Not Found.") {
                return (
                    <div>
                        <h1 className="text-white text-center display-2">{this.state.weather}</h1>
                    </div>
                );
            } else {
                return (
                    <div>
                        <h1 className="text-white text-center display-2">{this.toCapitalized(this.props.chosenState) + ' ' + this.state.weather}</h1>
                        <h1 className="text-white text-center">{Math.round(this.toFahrenheit(this.state.temp))} °F</h1>
                    </div>
                );
            }
        } else { 
            return (
                <div className="lds-ripple"><div></div><div></div></div>
            );
        }
    }
};