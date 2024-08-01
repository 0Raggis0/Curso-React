import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1/client";

//* Leer id de app
const appDomElement = document.getElementById('app');

//* Se inicia desde la base (tronco)
const root = ReactDOM.createRoot(appDomElement);

const h = React.createElement

const button1 = h('button', {"data-id": 123}, 'button1'); //* ('Que quiero crear', {atributos}, 'Lo que envuelve el elemento')
const button2 = h('button', {"data-id": 456}, 'button2'); //* ('Que quiero crear', {atributos}, 'Lo que envuelve el elemento')
const button3 = h('button', {"data-id": 789}, 'button3 '); //* ('Que quiero crear', {atributos}, 'Lo que envuelve el elemento')

//* Con JSX
/*
<React.Fragment>
    <button data-id="123" >button 1</button>
    <button data-id="456" >button 2</button>
    <button data-id="789" >button 3</button>
</React.Fragment>
*/
const app = h(React.Fragment, null, [button1, button2, button3]);

root.render(app) //* Puedo renderizar texto, pero no html <button> hola </button>
