import React from "react";
import ReactDOM from "react-dom/client";

// element injection using react
    // so React.CreateElement takes 3 element and returns a object/json
    const headingReact = React.createElement("h1", {id:"title"}, "3. Namaste React using React");
    console.log(headingReact); // this will return a object

    //here we get a global variable React which we got from the link which we donwload from cdn link
    // so React.CreateElement takes 3 element and returns a object/json
    // so here we pass tag, props{in this json you can psss any attribute which you want to pass to the tag} and children/content
    const heading1 = React.createElement("h1", {id:"heading1"}, "heading1");
    const heading2 = React.createElement("h2", {id:"heading2"}, "heading2");
    // if we want to render multiple elements then we can pass an array of elements to the React.createElement method
    const container = React.createElement("div", {id:"container"}, [headingReact, heading1, heading2]);


    // now we need to render this object into the root element
    // so we will use ReactDOM.createRoot() method.
    // When you pass a DOM element to createRoot(), such as a div with an id, React takes over that element completely. If there are any pre-existing child elements within that root div, it assumes full control and discards them because React manages its own component tree and rendering process.
    //we will get below warning
    //react.development.js:199 Warning: Each child in a list should have a unique "key" prop.
    //so we need to pass a unique key to each element
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
    // this will render the object into the root element
    //mostly we will have one root and one render method in our app no matter how big it is.