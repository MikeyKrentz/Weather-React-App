import React from 'react';

export class StateInput extends React.Component {

    state = {selectedState: 'Boise'}

    testEnter = (event) => {
        if(event.charCode === 13) {
            this.props.onInput(this.state.selectedState);
            return;
        }
    }

    changeState = (event) => {
        this.setState({selectedState: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <div className="input-field">
                        <input className="transparent" placeholder="Search..." onKeyPress={this.testEnter} onChange={this.changeState}></input>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        )
    }
};
