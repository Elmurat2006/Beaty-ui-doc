import React from "react";
import { CardTag } from "../components/Card/Card";
import { CommentTag, NpmTags } from "../components/Tags/Tags";

import "./Doc.css";

const Doc = () => {
  return (
    <>
      <div className="installation mt-5 mb-5">
        <h1 className="text-white fw-700 fs-extra-bold mb-2">Installation</h1>
        <p className="color-grey fw-700 mb-2">
          Install Beaty Ui, the world's most popular React UI framework.
        </p>
        <p className="color-grey fw-600 mb-2">
          MUI is available as an{" "}
          <a
            href="https://www.npmjs.com/package/beaty-ui-library"
            target="_blank"
          >
            npm package
          </a>
          .
        </p>
        <div className="npmInstal">
          <h2 className="fw-700 text-white fs-bold  mt-5 mb-2">npm</h2>
          <p className="color-grey mb-2">
            To install and save in your <code>package.json</code> dependencies,
            run:
          </p>
          <CardTag>
            <CommentTag>// with npm</CommentTag>
            <NpmTags>npm install beaty-ui</NpmTags>
          </CardTag>
          <p className="color-grey fw-600 mt-2">
            Please note that{" "}
            <a target="_blank" href="https://www.npmjs.com/package/react">
              react
            </a>
            &gt;= 17.0.0 and{" "}
            <a target="_blank" href="https://www.npmjs.com/package/react-dom">
              react-dom
            </a>{" "}
            &gt;= 17.0.0 are peer dependencies.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-white fs-bold  fw-700 mb-2">Roboto Font</h2>
          <p className="color-grey fw-600 mb-2">
            Beaty UI was designed with the{" "}
            <a target="_blank" href="https://fonts.google.com/specimen/Roboto">
              {" "}
              Roboto{" "}
            </a>
            font in mind. So be sure to follow{" "}
            <a target="_blank" href="https://www.npmjs.com/package/react-dom">
              these instructions
            </a>
            . For instance, via Google Web Fonts:
          </p>
          <CardTag>
            <pre>
              <code className="language-html d-flex flex-column flex-wrap">
                <span className="token tag">
                  <div className="token tag linkTag-color ">
                    <span className="token punctuation text-white">&lt;</span>
                    link
                  </div>
                  <div>
                    {" "}
                    <span className="token attr-name green-color">rel</span>
                    <span className="token attr-value">
                      <span className="token punctuation attr-equals">=</span>
                      <span className="token punctuation">"</span>
                      stylesheet
                      <span className="token punctuation">"</span>
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className="token attr-name green-color">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation attr-equals">=</span>
                      <span className="token punctuation">"</span>
                      https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap
                      <span className="token punctuation">"</span>
                    </span>
                  </div>
                  <div className="token punctuation">/&gt;</div>
                </span>
              </code>
            </pre>
          </CardTag>
        </div>
      </div>

      <hr className="line"/>

      {/* Usage part  */}

      <div className="installation mt-5 mb-5">
        <h1 className="text-white fw-700 fs-extra-bold mb-2">Usage</h1>
        <p className="color-grey fw-700 mb-2">
          Install Beaty Ui, the world's most popular React UI framework.
        </p>
        <p className="color-grey fw-600 mb-2">
          <strong>They are self-supporting</strong>, and will only inject the
          style-sheets such as{" "}
          <a href="https://github.com/necolas/normalize.css/">normalize.css</a>.
        </p>
        <div className="npmInstal">
          <h2 className="fw-700 text-white fs-bold  mt-5 mb-2">Quick start</h2>
          <p className="color-grey mb-2">
            <p>
              Here's a quick example to get you started,{" "}
              <strong>it's literally all you need</strong>:
            </p>
          </p>
          <CardTag>
            <pre>
              <code class="language-jsx">
                <div>
                  <span class="token keyword">import</span>{" "}
                  <span class="token operator">*</span>{" "}
                  <span class="token keyword">as</span> <span>React</span>{" "}
                  <span class="token keyword">from</span>{" "}
                  <span class="token string">'react'</span>
                  <span class="token punctuation">;</span>
                </div>
                <div>
                  <span class="token keyword">import</span>{" "}
                  <span>ReactDom</span> <span class="token keyword">from</span>{" "}
                  <span class="token string">'react-dom'</span>
                  <span class="token punctuation">;</span>
                </div>
                <div>
                  <span class="token keyword">import</span> <span>Button</span>{" "}
                  <span class="token keyword">from</span>{" "}
                  <span class="token string">'beaty-ui-library'</span>
                  <span class="token punctuation">;</span>
                </div>
                <span class="token keyword">function</span>{" "}
                <span class="token function">App</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>{" "}
                <span class="token punctuation"></span>
                <span class="token keyword">return</span>{" "}
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>
                    <span class="token class-name">Button</span>
                  </span>{" "}
                  <span class="token attr-name">variant</span>
                  <span class="token attr-value">
                    <span class="token punctuation attr-equals">=</span>
                    <span class="token punctuation">"</span>contained
                    <span class="token punctuation">"</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span>Hello World</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>
                    <span class="token class-name">Button</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">;</span>
                <span class="token punctuation"></span>
              </code>
            </pre>
          </CardTag>
          <p className="color-grey fw-600 mt-2">
            Yes, this really is all you need to get started, as you can see in
            this live and interactive demo:
          </p>
        </div>
      </div>
    </>
  );
};

export default Doc;
