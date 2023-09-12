import React from 'react'
import ReactDOM from 'react-dom'

// creating react elements using jsx
 const jsxHeading=<h1>Hello using jsx!!</h1>
 const multiline=(
    <h1>Hello using multiline!!</h1> 
 );
 const root=ReactDOM.createRoot(document.getElementById("root"));
 //root.render(multiline);
 

 //creating functional components
 // functional componets are normal js arrow functions and return jsx...

 // single jsx using components
// always use camel case in naming components!!
 const SingleComponent=()=>
 {
    return <h1>Nmaste Functional component using single line</h1>
 };
// root.render(SingleComponent); 
 // this is not understood by js react because it expects a react elment inside render
// root.render(<SingleComponent/>);

 const MultiComponent=()=>
 {
    return (
        <div className="container">
            <h1>Namaste Functional component using multi line Components</h1>
        </div>

    )// multi jsx so round brackets
 };
 root.render(<MultiComponent/>);


