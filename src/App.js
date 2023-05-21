import { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.css';
import Widget from "./Widget";

function App() {
    useEffect(() => {
        var grid = GridStack.init();
    });

    return (
        <div className="App">
            <div className="grid-stack">
                <div className="grid-stack-item" gs-w="2" gs-h="2">
                    <div className="grid-stack-item-content">Item 1</div>
                </div>
                <div className="grid-stack-item" gs-w="2" gs-h="2">
                    <div className="grid-stack-item-content">Item 2</div>
                </div>
                <Widget options={{width: "1", height: "2", name: "Marv"}} />
            </div>
        </div>
    );
}

export default App;
