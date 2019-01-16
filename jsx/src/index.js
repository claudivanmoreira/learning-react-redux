import React from 'react';
import ReactDOM from 'react-dom';

/*Second way
function getButtonText() {
    return 'Click Me!';
}
Use: {getButtonText()}*/

const App = () => {
    //First way: const buttonText = 'Click Me!';
    //Use: {buttonText}

    //Third way:
    const clickButton = {text: 'Click Me!'};
    const labelName = {text: 'Enter Name:'};
    
    const styleClickButton = {backgroundColor: 'blue', color: 'white', border: '1px solid blue', padding: '5px 10px', borderRadius: '10px', outline: 'none', cursor: 'pointer'};
    const styleInputName = {borderRadius: '10px', border: '1px solid #ccc', padding: '5px 10px', outline: 'none'};

    return (
        <div>
            <label className="label" htmlFor="name">{labelName.text}</label>
            <input id="name" type="text" style={styleInputName}/>
            <button style={styleClickButton}>
                {clickButton.text}
            </button>
        </div>
    )
}  

ReactDOM.render(<App/>, document.querySelector('#root') );