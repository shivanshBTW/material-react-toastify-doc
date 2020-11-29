import { Bounce, Slide, Zoom, Flip } from "material-react-toastify";

export const containerOptions = [
  {
    id: "disableAutoClose",
    label: "Disable auto-close",
  },
  {
    id: "hideProgressBar",
    label: "Hide progress bar(less fanciness!)",
  },
  {
    id: "newestOnTop",
    label: "Newest on top* (play nice with bottom toast)",
  },
  {
    id: "closeOnClick",
    label: "Close on click",
  },
  {
    id: "pauseOnHover",
    label: "Pause delay on hover",
  },
  {
    id: "pauseOnFocusLoss",
    label: "Pause toast when the window loses focus",
  },
  {
    id: "rtl",
    label: "Right to left layout*",
  },
  {
    id: "draggable",
    label: "Allow to drag and close the toast",
  },
];

export const transitions = {
  bounce: Bounce,
  slide: Slide,
  zoom: Zoom,
  flip: Flip,
};
