import { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Grid from "./Grid";

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
        // $('.grid-stack').data('gridstack').setGridWidth(2);
        // setColumn() is also an option
    });

    return (
        <div className="App">
            <Grid />
        </div>
    );
}

export default App;