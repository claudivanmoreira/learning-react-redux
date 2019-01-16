import React from 'react';
import ReactDOM from 'react-dom';

//Second way
function getButtonText() {
    return 'Click Me!';
}

const App = () => {
    //First way: const buttonText = 'Click Me!';
    //Use: {buttonText}
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"style={{borderRadius: '10px', border: '1px solid #ccc', padding: '5px 10px', outline: 'none'}}/>
            <button style={{backgroundColor: 'blue', color: 'white', border: '1px solid blue', padding: '5px 10px', borderRadius: '10px', outline: 'none', cursor: 'pointer'}}>
                {getButtonText()}
            </button>
        </div>
    )
}  

ReactDOM.render(<App/>, document.querySelector('#root') );