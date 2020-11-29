---
id: 'render-what-you-want'
title: 'Render more than string'
sidebar_label: 'Render more than string'
---

You can render any valid `ReactNode`: string, number, component... This is really straightforward. 

## Basic example

:::important Important
  When you render a component, a `closeToast` prop is injected into your component.
:::

```jsx
import React from 'react';
import { ToastContainer, toast } from "material-react-toastify";

const Msg = ({ closeToast }) => (
  <div>
    Lorem ipsum dolor
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
)

function App(){
  const displayMsg = () => {
    toast(<Msg />) 
    // toast(Msg) would also work
  }

  return (
  <div>
    <button onClick={displayMsg}>Click me</button>
    <ToastContainer />
  </div>
);
}
```

You can also render a component using a function. More or less like a "render props":

```jsx
toast(({ closeToast }) => <div>Functional swag 😎</div>);
```

## Awesome example 🚀

In this example we will use react context to share state accross a component and a toast. Increment and display a toast at the same time to see how the state stay in sync !

import { ContextExample } from '../src/components/ContextExample';

<ContextExample />


```jsx
import React from "react";
import { ToastContainer, toast } from "material-react-toastify";

const CountContext = React.createContext(null);

function useCount() {
  const context = React.useContext(CountContext);
  return context;
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  return <CountContext.Provider value={[count, setCount]} {...props} />;
}

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);

  return <Button onClick={increment}>Increment {count}</Button>;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>The current counter count is {count}</div>;
}

export const ContextExample = () => {
  const displayToast = () => {
    toast(<CountDisplay />);
  };

  return (
    <CountProvider>
      <Container>
        <Counter />
        <Button onClick={displayToast}>
          Display toast
        </Button>
      </Container>
      <ToastContainer autoClose={false} draggable={false} />
    </CountProvider>
  );
};

```

:::important Important
  When you want to use a hook inside a toast you must do `toast(<YourComponent />)`.
  
  `toast(YourComponent)` would not work because there is no way to know that this is a react element
:::
