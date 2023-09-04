// to create basic react element
const heading=React.createElement("h1",{id:"heading"},"hello from react.js in app.js file");
// root.render(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));

// line 4 is coomon for all
// to create nested structure
const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
React.createElement("h1",
{id:"title"},
"i am nested structure")));

// root.render(parent);

 // to create siblings use array in 3rd argument
 const siblings=React.createElement("div",
 {id:"siblings"},
 [React.createElement("div",{id:"box"},"box1"),
React.createElement("div",{id:"box"},"box2"),]);
root.render(siblings);