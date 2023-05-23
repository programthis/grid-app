import { useState, useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Widget from "./Widget";

function App() {
    const [current_user, setCurrentUser] = useState(false);

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

    const loggingInUser = () => {
        console.log("setting current user...");
        setCurrentUser(true);
    }

    return (
        <div className="App">
            <div className="topContainer">
                {
                    current_user ?
                    <div>
                        <button onClick={() => this.loadGrid()}>Load</button>
                        <button onClick={() => this.saveGrid()}>Save</button>
                    </div>
                    :
                    <button onClick={loggingInUser}>Login</button>    
                }
            </div>
            <div className="grid-stack">
                <Widget options={{width: "1", height: "1", name: "Luke", background: "#67d967", x_pos: "0", y_pos: "0"}} />
                <Widget options={{width: "1", height: "1", name: "Leia", background: "#3371cd", x_pos: "1", y_pos: "0"}} />
                <Widget options={{width: "1", height: "1", name: "Marv", background: "#ebeb5b", x_pos: "2", y_pos: "0"}} />
                <Widget options={{width: "2", height: "3", name: "Darth", background: "#db2c2c", x_pos: "1", y_pos: "1"}} />
            </div>
        </div>
    );
}

export default App;