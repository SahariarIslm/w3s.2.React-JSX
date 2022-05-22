import React from 'react';
import ReactDOM from 'react-dom/client';

// 1 JSX:
// const myElement = <h1>I Love JSX!</h1>;
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// 2 Without JSX:
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// 3.  Expressions in JSX
// With JSX you can write expressions inside curly braces { }.

// const myElement = <h1>React is {5+5} times better with JSX</h1>
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

//4.To write HTML on multiple lines, put the HTML inside parentheses:
// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

//5.The HTML code must be wrapped in ONE top level element.
// const myElement = (
//   <div>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

//6.Alternatively, you can use a "fragment <></>" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// 7.Conditions - if statements
// ->React supports if statements, but not inside JSX.
// ->To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

// ->Option 1: Write if statements outside of the JSX code:

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//Option 1:
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

//Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.


// 8.