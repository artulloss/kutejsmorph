import "./style.css";

// @ts-ignore
import KUTE from "kute.js";

console.log(KUTE);
let transition1 = KUTE.fromTo(
  "#frame1",
  { path: "#frame1" },
  { path: "#frame2" },
  { duration: 3000 }
);

let transition2 = KUTE.fromTo(
  "#frame2",
  { path: "#frame2" },
  { path: "#frame3" },
  { duration: 3000 }
);

let transition3 = KUTE.fromTo(
  "#frame3",
  { path: "#frame3" },
  { path: "#frame4" },
  { duration: 3000 }
);

let transition4 = KUTE.fromTo(
  "#frame4",
  { path: "#frame4" },
  { path: "#frame1" },
  { duration: 3000 }
);

transition1.chain(transition2);
transition2.chain(transition3);
transition3.chain(transition4);
transition4.chain(transition1);

transition1.start();
