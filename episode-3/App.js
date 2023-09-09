import React from 'react'
import ReactDOM from 'react-dom'

// to create basic react element
const heading=React.createElement("h1",{id:"heading"},"hello from react.js in app.js file");
// root.render(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));

// line 4 is common for all
// to create nested structure
const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
React.createElement("h1",
{id:"title"},
"i am nested structure by harshitha")));


root.render(parent);