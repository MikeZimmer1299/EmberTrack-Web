import React from "react";
// import {useState} from "react";
import "./HomeScreen.css";

// TSX/React crash course notes
// : React.FC -> TS type annotation
    // FC stands for Functional Component
    // Tells compiler this must behave like a React component
// = () => {}
    // () are arguments (currently empty)
    // => points to logic inside
const HomeScreen: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the home screen!</h1>
        </div>
    );
};

// Note to self: this must be OUTSIDE the curly braces
export default HomeScreen;