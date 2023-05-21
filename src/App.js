import { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Widget from "./Widget";

function App() {
    useEffect(() => {
        let windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            numOfColumns = Math.floor(windowWidth / 100);
        document.title = "The Grid";
        var grid = GridStack.init({
            float: true,
            gridBackground: true,
            column: numOfColumns
        });
    });

    const fixed = (float) => {
        return Math.round(float * 1000) / 1000 + '%';
    };

    return (
        <div className="App">
            <div className="grid-stack">
                <Widget options={{width: "1", height: "2", name: "Luke", background: "#67d967"}} />
                <Widget options={{width: "1", height: "2", name: "Leia", background: "#3371cd"}} />
                <Widget options={{width: "1", height: "2", name: "Marv", background: "#ebeb5b"}} />
                <Widget options={{width: "1", height: "2", name: "Darth", background: "#db2c2c"}} />
            </div>
        </div>
    );
}

export default App;