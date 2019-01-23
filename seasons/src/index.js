import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

/*const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err),
    );
    return <div>Hi there!</div>
}*/

class App extends React.Component {

    /*constructor(props) {
        console.log('[Mounting][Render phase] - Construtor chamado...');
        super(props);
        //THIS IS THE ONLY TIME we do direct assigment
        //to this.state
        this.state={ lat: null, errorMessage: '' };
    }*/

    //ALTERNATE STATE INITIALIZATION. The transpile will assign an constructor method to this class as before.
    state={ lat: null, errorMessage: '' };
    
    // React says we have to define render!!
    render() {
        console.log('[Mounting][Render phase] - render chamado...');
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <div>Loading!</div>
    }

    componentDidMount() {
        console.log('[Mounting][Commit phase] - componentDidMount chamado...');
        window.navigator.geolocation.getCurrentPosition(
            // we called setstate!!!
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('[Updating][Commit phase] - componentDidUpdate chamado...');
    }

    componentWillUnpount() {
        console.log('[Unmounting][Commit phase] - componentWillUnpount chamado...');
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));