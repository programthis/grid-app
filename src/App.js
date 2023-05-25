import { useState, useEffect, useRef } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './App.scss';
import Widget from "./Widget";
import user_data from './database/users.json';


function App() {
    const [current_user, setCurrentUser] = useState(false);
    const gridRef = useRef(null);
    const [backgroundSize, setBackgroundSize] = useState(0);

    useEffect(() => {
        const initializeGrid = () => {
            let windowWidth = window.innerWidth,
                numOfColumns = Math.floor(windowWidth / 100),
                backgroundCalculation = windowWidth / numOfColumns;
            document.title = "The Grid";
            
            setBackgroundSize(backgroundCalculation);
            var grid = GridStack.init({
                float: true,
                gridBackground: true,
                column: numOfColumns
            });
            console.log(numOfColumns);
            gridRef.current = grid;
        }

        const resizeWindow = () => {
            let windowWidth = window.innerWidth,
                numOfColumns = Math.floor(windowWidth / 100),
                backgroundCalculation = windowWidth / numOfColumns;
            setBackgroundSize(backgroundCalculation);
            let grid = gridRef.current;
            if (grid) {
                // grid.destroy(false);
                grid.column(numOfColumns);
            }
            // initializeGrid();
        }
        initializeGrid();
        window.addEventListener('resize', resizeWindow);
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
        localStorage.setItem('savedLayout', serializedLayout);
    }

    const gridStyle = {
        backgroundSize: `${backgroundSize}px ${backgroundSize}px`
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
            <div className="grid-stack" style={gridStyle}>
                <Widget options={{width: "1", height: "1", name: "Luke", x_pos: "0", y_pos: "0"}} />
                <Widget options={{width: "1", height: "1", name: "Leia", x_pos: "1", y_pos: "0"}} />
                <Widget options={{width: "1", height: "1", name: "Marv", x_pos: "2", y_pos: "0"}} />
                <Widget options={{width: "2", height: "3", name: "Darth", x_pos: "1", y_pos: "1"}} />
            </div>
        </div>
    );
}

export default App;