import { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Grid from "./Grid";

function App() {
    useEffect(() => {
        let windowWidth = window.innerWidth,
            numOfColumns = Math.floor(windowWidth / 100);
        document.title = "The Grid";
        var grid = GridStack.init({
            float: true,
            gridBackground: true,
            column: numOfColumns
        });
        // $('.grid-stack').data('gridstack').setGridWidth(2);
        // setColumn() is also an option

        // setting event listener for whenever the grid item is moved
        const handleMove = (event, gridItem) => {
            let id = gridItem[0]._id,
                x_pos = gridItem[0].x,
                y_pos = gridItem[0].y;
            // TODO update json data whenever things are moved

        };
        grid.on('change', handleMove);
        return () => {
            grid.off('change', handleMove);
        };
    });

    return (
        <div className="App">
            <Grid />
        </div>
    );
}

export default App;