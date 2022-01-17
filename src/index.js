import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/08-useReducer/TodoApp';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp.js';

ReactDOM.render(
    <TodoApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// import "./components/useReducer/intro-reducer";