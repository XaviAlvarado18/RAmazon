import React from "react";
import Header from "./components/header/Header";
import Home from "./components/Body/Home";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderJr from "./components/header/HeaderJr";
import Footer from "./components/footer/footer";

function App() {
    return(
        <Router>
            <div className="app">
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <>
                                <Header />
                                <HeaderJr />
                                <div className='div'>
                                    <Home />
                                    <Footer/>
                                </div>   
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App;