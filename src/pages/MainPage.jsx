import { Button } from "../components/Button/Button";
import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Vscode from "../assets/vscode-dev.png";

const MainPage = () => {
  const [text, setText] = useState("npm install beaty-ui-library");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    alert("text copied");
  };

  return (
    <div className="">
      <div className="main_page mt-5">
        <div className="firstPage mb-5 d-flex">
          <div className="left-block d-flex flex-column">
            <h1 className="text-white margin-top-9rem mt-36 h1-text">
              <span className="text-blue">Move faster </span>
              with intuitive React UI tools
            </h1>
            <p className="text-white p-text my-3">
              MUI offers a comprehensive suite of UI tools to help you ship new
              features faster. Start with Material UI, our fully-loaded
              component library, or bring your own design system to our
              production-ready components.
            </p>
            <div className="d-flex gap-2 flex-wrap ">
              <Link to="/doc" className="btn-adaptive">
                <button className="border-none d-flex align-items-center">
                  <Button className="btn--large  ">
                    Get Started
                    <span></span>
                  </Button>
                </button>
              </Link>

              <input
                type="text"
                className="diNone"
                value={text}
                onChange={inputHandler}
              />
              <button
                onClick={copyText}
                disabled={!text}
                className="buttonGlobal  fw-normal installBtn mb-5"
              >
                <span>npm install beaty-ui-library</span>
              </button>
              <form></form>
            </div>
          </div>
          <div className="img-vscode imgNone ">
            <img src={Vscode} className="ms-5 imgNone  " alt="" width="900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
