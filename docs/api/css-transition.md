---
id: css-transition
title: cssTransition
sidebar_label: cssTransition
---

| Parameter        | Type                      | Required | Default | Description                                                                                                |
|------------------|---------------------------|----------|---------|------------------------------------------------------------------------------------------------------------|
| enter            | string                    | ✓        | -       | The class name that will be used when the toast enter                                                      |
| exit             | string                    | ✓        | -       | The class name that will be used when the toast exit                                                       |
| duration         | number \| [number,number] | ✘        | 750     | The transition duration in ms.                                                                             |
| appendPosition   | bool                      | ✘        | false   | Append or not the position  to the class name: `yourClassName--top-right`, `yourClassName--bottom-left`... |
| collapse         | bool                      | ✘        | true    | Collapse toast after exit animation                                                                        |
| collapseDuration | number                    | ✘        | 300     | The collapse duration                                                                                      |


## Usage

```js
import { cssTransition } from 'material-react-toastify';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: 750,
  appendPosition: false,
  collapse: true,
  collapseDuration: 300
});

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: [500, 600],
  appendPosition: false
});
```
