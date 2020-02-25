import React from "react";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Routing } from "./Routing";
import { StateProvider } from "./Store/ProductStore";

function App() {
    return (
        <div className="App">
            <StateProvider>
                <Navbar />
                <Routing />
                <Footer />
            </StateProvider>
        </div>
    );
}

export default App;
