import { useState, useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Widget from "./Widget";
import user_data from './database/users.json';
import widget_data from './database/widgets.json';


function App() {
    const [current_user, setCurrentUser] = useState(false);
    const [widgetDataJson, setWidgetDataJson] = useState({});

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

        // setting listener for whenever the grid item is moved
        let data = widget_data["widgets"];
        const handleMove = (event, gridItem) => {
            let id = gridItem[0]._id,
                x_pos = gridItem[0].x,
                y_pos = gridItem[0].y;
            data[id]["x_pos"] = x_pos;
            data[id]["y_pos"] = y_pos;
            setWidgetDataJson(data);
        };
        grid.on('change', handleMove);
        return () => {
            grid.off('change', handleMove);
        };
    });

    const loggingInUser = () => {
        let data = user_data["users"],
            email = "admin@admin.com",
            password = "admin",
            user = data.find(userObject => {
                return userObject.email === email
            });

        if (password === user.password) {
            // let's pretend the password is encrypted
            setCurrentUser(true);   
        }

        // sample api request below
        // fetch('https://api.grid_app.com/users/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: email,
        //       password: hashedPassword,
        //     }),
        // }).then(response => {
        //         if (response.ok) {
        //             setCurrentUser(true);
        //         }
        //         else {
        //             console.log("error...");
        //         }
        //     })
        //     .catch(error => {
        //     });
    }

    const loadWidgetData = () => {
        let widgetData = localStorage.getItem("widgetData");
    }

    const saveWidgetData = () => {
        localStorage.setItem("widgetData", JSON.stringify(widgetDataJson));
    }

    return (
        <div className="App">
            <div className="topContainer">
                {
                    current_user ?
                    <div>
                        <button onClick={loadWidgetData}>Load</button>
                        <button onClick={saveWidgetData}>Save</button>
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