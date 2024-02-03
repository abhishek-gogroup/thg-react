import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => {
  return (
    <div>
      <h1>Title</h1>
    </div>
  )
}

const name = "Abhishek"

function Header() {
  return ( 
    <div> 
      { Title() }
      <Title />
      <Title></Title>
    </div> 
  )
}

const header = <h1>This is h1</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);





// Bundlers Parcel/Webpack
// JSX -> REact Code -> JS/HTML (Parcel manages babel)

// Class Based 
// Functional based - JS function which returne JSX