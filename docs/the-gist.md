---
id: the-gist-of-material-react-toastify
title: The gist of material-react-toastify
sidebar_label: The gist of material-react-toastify
---

```jsx
  import React from 'react';
  import { ToastContainer, toast } from 'material-react-toastify';

  import 'material-react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'material-react-toastify/dist/ReactToastify.min.css';

  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
```

:::important Important
Remember to render the `ToastContainer` *once* in your application tree. 
If you can't figure out where to put it, rendering it in the application root would be the best bet.
:::
