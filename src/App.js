import { useState, useEffect, useRef } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Widget from "./Widget";
import user_data from './database/users.json';
import widget_data from './database/widgets.json';


function App() {
    const [current_user, setCurrentUser] = useState(false);
    const gridRef = useRef(null);

    useEffect(() => {
        let windowWidth = window.innerWidth,
            numOfColumns = Math.floor(windowWidth / 100);
        document.title = "The Grid";
        var grid = GridStack.init({
            float: true,
            gridBackground: true,
            column: numOfColumns
        });
        gridRef.current = grid;

        // $('.grid-stack').data('gridstack').setGridWidth(2);
        // setColumn() is also an option
    });

    const loggingInUser = () => {
        let data = user_data["users"],
            email = "admin@admin.com",
            password = "admin",
            user = data.find(userObject => {
                return userObject.email === email
            });

        // let's pretend there's an actual login form
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
        let grid = gridRef.current,
            savedLayout = localStorage.getItem('savedLayout');
        savedLayout = JSON.parse(savedLayout);
        grid.removeAll();
        grid.load(savedLayout);
    }

    const saveWidgetData = () => {
        let grid = gridRef.current,
            layout = grid.save(),
            serializedLayout = JSON.stringify(layout);
        console.log(serializedLayout);
        localStorage.setItem('savedLayout', serializedLayout);
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