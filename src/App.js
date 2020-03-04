import React from 'react';
import { SketchPicker } from 'react-color';
import './App.css';

class App extends React.Component {
    state = {
        selectedColor: undefined
    };

    onChangeColor = (selectedColor, event) => {
        this.setState({ selectedColor });
    }

    render() {
        const { selectedColor } = this.state;
        return (
            <div className="App">
                <h1>Try selecting colors very close to the bottom edge of the picker</h1>
                <h3>Simple clicks and drag actions do not seem to work as expected</h3>
                <SketchPicker
                    width={220}
                    color={selectedColor}
                    onChange={this.onChangeColor}
                />
            </div>
        );
    }
}

export default App;
