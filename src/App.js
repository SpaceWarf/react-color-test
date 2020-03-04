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
