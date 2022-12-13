import React from 'react';
import logo from './logo.svg';
import './App.css';

//In TS you have to define the type of the variable, in regular JS, it simply assumes the name, once it's declared as a string, it remains a string
let name:string = "hola"
// number
let age:number
// boolean
let isStrudent: boolean
// string array
let hobbies:string[]
//tuple
let role: [number, string]
// double type
let roles : [number, string]
// using type is the recommended way of declaring objects
// type Person= {
//   name:string
//   // ? makes it optional
//   age?:number
// }

let person:Person = {
  name: "daniel",
  age : 27
}

function printName(name:string) {

  console.log(name);
  
  
}

// function that returns void
// assign type to a name
let printFunction: (name:string) => void;
//Never returns anything
let printFunctionTwo: (name:string) => never;
let manyPeople: Person[]


// Using "interface" is recommended over type

interface Person {
  name:string
  // ? makes it optional
  age?:number
}

interface Profession extends Person {
  profession: "developer"
}

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
  