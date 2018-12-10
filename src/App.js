import React, {Component} from 'react';
import ToolBar from "./toolbar/ToolBar";
import './router'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<TestHOC/>*/}
                <ToolBar/>
            </div>
        );
    }
}

export default App;
