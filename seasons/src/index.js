import React from 'react';
import ReactDOM from 'react-dom';

/*const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err),
    );
    return <div>Hi there!</div>
}*/

class App extends React.Component {

    constructor(props) {
        console.log('[Mounting][Render phase] - Construtor chamado...');
        super(props);

        //THIS IS THE ONLY TIME we do direct assigment
        //to this.state
        this.state={ lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            // we called setstate!!!
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }
    
    // React says we have to define render!!
    render() {
        console.log('[Mounting][Render phase] - render chamado...');
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Latitude: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        
        return <div>Loading!</div>
    }

    componentDidMount() {
        console.log('[Mounting][Commit phase] - componentDidMount chamado...');
    }
    componentDidUpdate() {
        console.log('[Updating][Commit phase] - componentDidUpdate chamado...');
    }
    componentWillUnpount() {
        console.log('[Unmounting][Commit phase] - componentWillUnpount chamado...');
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));