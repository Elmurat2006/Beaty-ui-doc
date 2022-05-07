import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import {
  Button,
  GlobalStyles,
  Login,
  Search,
  Spinner,
  Skeleton,
  Select,
  TextInput,
  Link,
} from "beaty-ui-library";
import { useState } from "react";
import { CardTag } from "../components/Card/Card";

let login = [
  {
    id: 1,
    title: "Login Template",
    description:
      "A floating action button (FAB) performs the primary, or most common, action on a screen.",
    subtitle:
      "A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended. Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action.",
    component: <Login />,
    link: "https://codesandbox.io/s/practical-tdd-wyc5k3?file=/src/App.js",
  },
];
let button = [
  {
    id: 2,
    title: "Button",
    description: "The Button component can be used to group related buttons.",
    subtitle:
      "The buttons can be grouped by wrapping them with the Button component. They need to be immediate children.",
    component: <Button className="border-radius">Button</Button>,
    link: "https://codesandbox.io/s/blue-firefly-hbovmq?file=/src/App.js",
  },
];

let spinner = [
  {
    id: 3,
    title: "Spinner",
    description:
      "The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.",
    subtitle:
      "The component renders its children node in front of a backdrop component. The Modal offers important features:",
    component: <Spinner />,
    link: "https://codesandbox.io/s/relaxed-swirles-g5s0s3?file=/src/App.js",
  },
];

let search = [
  {
    id: 4,
    title: "Search",
    description:
      "Search allow users to make selections from a range of values.",
    subtitle:
      "Search reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.",
    component: <Search />,
    link: "https://codesandbox.io/s/amazing-hermann-u6e4wg?file=/src/App.js",
  },
];

let skeleton = [
  {
    id: 5,
    title: "Skeleton",
    description: "Responsive Skeleton",
    subtitle: "Use .max-w-full and .h-auto classes to make a image responsive.",
    component: <Skeleton />,
    link: "https://codesandbox.io/s/modest-bose-l79y05?file=/src/App.js",
  },
];

let select = [
  {
    id: 6,
    title: "Select",
    description: "Use Select to make your code prettier",
    subtitle: "Use .max-w-full and .h-auto classes to make a image responsive.",
    component: <Select>Select</Select>,
    link: "https://codesandbox.io/s/damp-sun-pek997?file=/src/App.js",
  },
];

let textInput = [
  {
    id: 7,
    title: "Text Input",
    description: "Text Input is the fastest way to make input be prettier",
    subtitle: "Use .max-w-full and .h-auto classes to make a image responsive.",
    component: <TextInput />,
    link: "https://codesandbox.io/s/recursing-rgb-m4rce6?file=/src/App.js",
  },
];

let link = [
  {
    id: 8,
    title: "Link",
    description: "Use Link to manage your website",
    subtitle: "it will be really beatiful if you will use Link",
    component: (
      <Link href="https://t.me/BeatySupportBot" target="_blank">
        Telegram bote
      </Link>
    ),
    link: "https://codesandbox.io/s/bold-morning-er1dly?file=/src/App.js",
  },
];

const Templates = (props) => {
  const [value, setValue] = useState("");

  const [templatee, setTemplatee] = useState([]);

  return (
    <div className="templates container-md grid grid-cols-2 ">
      <GlobalStyles />
      <Sidebar />

      <div className="text-white grid flex-column d-flex grid-cols-2 gap-4 container-md">
        <div className="grid-cols-2">
          {login.map((item) => (
            <div className="" key={item.id} id="login">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}

          {button.map((item) => (
            <div className="" key={item.id} id="button">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}

          {spinner.map((item) => (
            <div className="" key={item.id} id="spinner">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}

          {search.map((item) => (
            <div className="" key={item.id} id="search">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}

          {skeleton.map((item) => (
            <div className="" key={item.id} id="skeleton">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}
          {select.map((item) => (
            <div className="" key={item.id} id="select">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}
          {textInput.map((item) => (
            <div className="" key={item.id} id="textInput">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}
          {link.map((item) => (
            <div className="" key={item.id} id="link">
              <h2
                className="mt-10 text-center text-4xl font-bold mb-10"
                id="template"
              >
                {item.title}
              </h2>
              <p className="text-gray-400 text-center">{item.description}</p>
              <h2 className="mt-10 text-center">{item.subtitle}</h2>
              <ul className="mt-10 text-center mb-3">
                <li>
                  💄 Manages modal stacking when one-at-a-time just isn't
                  enough.
                </li>
                <li>
                  🔐 Creates a backdrop, for disabling interaction below the
                  modal..
                </li>
                <li>
                  🔐 It disables scrolling of the page content while open.
                </li>
                <li>
                  ♿️ It properly manages focus; moving to the modal content,
                  and keeping it there until the modal is closed.
                </li>
              </ul>
              <div className="d-flex justify-center">
                <CardTag>
                  <div className="text-center">{item.component}</div>
                </CardTag>
              </div>
              <h2 className="text-center mt-10 text-2xl">Codesandbox</h2>
              <div className="flex justify-center items-center line">
                <a className="text-6xl mt-10 mb-32" href={item.link}>
                  <AiFillCodeSandboxCircle />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
