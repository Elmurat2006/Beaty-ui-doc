import { useState } from "react";
import {
  Card,
  CardBody,
  CardBodyText,
  CardHeader,
  CardHeaderText,
  CardLink,
} from "../../components/Card/Card";
import { Link } from "react-router-dom";
import "../About/About.css";

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="fs-8rem color-blue text-center">About us</p>
        <h1 className="fw-800 text-white fs-def max-width-490 text-align-center">
          We're on a mission to make building UIs more
          <span className="color-blue ms-2">accessible</span>
        </h1>
        <p className="color-grey max-width-500 text-align-center">
          Our mission is to empower anyone to build UIs, faster. We're reducing
          the entry barrier, making design skills accessible.
        </p>
      </div>
      <div className="mb-5">
        <div className="d-flex justify-content-between flex-wrap align-items-center p-4">
          <img
            src="https://mui.com/static/branding/companies/spotify-dark.svg"
            alt="spotify logo"
            loading="lazy"
            width="100"
            height="52"
          />
          <img
            src="https://mui.com/static/branding/companies/amazon-dark.svg"
            alt="amazon logo"
            loading="lazy"
            width="80"
            height="52"
          />
          <img
            src="https://mui.com/static/branding/companies/nasa-dark.svg"
            alt="nasa logo"
            loading="lazy"
            width="52"
            height="42"
          />
          <img
            src="https://mui.com/static/branding/companies/netflix-dark.svg"
            alt="netflix logo"
            loading="lazy"
            width="80"
            height="52"
          />
          <img
            src="https://mui.com/static/branding/companies/unity-dark.svg"
            alt="unity logo"
            loading="lazy"
            width="69"
            height="52"
          />
          <img
            src="https://mui.com/static/branding/companies/shutterstock-dark.svg"
            alt="shutterstock logo"
            loading="lazy"
            width="100"
            height="52"
          />
        </div>
        <p className="color-grey text-center fs-light">
          The world's best product teams trust MUI to deliver an unrivaled
          experience for both developers and users.
        </p>
      </div>
      <div className="d-flex flex-column">
        <header>
          <h2 className="mt-5 mb-5 text-center pageHeader">
            How can you support us?
          </h2>
        </header>
        <div className="d-flex card-f flex-wrap justify-content-between gap-3">
          <Card>
            <CardHeader>
              <svg
                fill="#3399ff"
                width="20px"
                heigth="20px"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ForumRoundedIcon"
              >
                <path
                  d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 
                2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 
                0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"
                ></path>
              </svg>
              <CardHeaderText className="ms-1">Telegram Bote</CardHeaderText>
            </CardHeader>
            <CardBody>
              <CardBodyText>
                Tell us what and where we can improve or share your happy
                moments with us! You can also up or downvote any page on our
                documentation.
                <br />
                <br />
                And lastly, from time to time, we send our community a survey
                for more structured feedback, you're always invited to
                participate to share your thoughts.
              </CardBodyText>
              <div className="d-flex">
                <a
                  href="https://t.me/BeatySupportBot"
                  target="_blank"
                  className="d-flex align-items-center link-hover"
                >
                  <span className="color-link fs-8rem fw-600">
                    Here is the link
                  </span>
                  <span>
                    <svg
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="#3399ff"
                      width="20px"
                      heigth="20px"
                      data-testid="KeyboardArrowRightRoundedIcon"
                    >
                      <path
                        d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1
                    0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 
                    1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 
                    0-1.42z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <svg
                fill="#3399ff"
                width="20px"
                heigth="20px"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ForumRoundedIcon"
              >
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 
                5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 
                5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 
                .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 
                0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 
                .35-.07.69-.18 
                1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"
                ></path>
              </svg>
              <CardHeaderText className="ms-1">
                Join the community
              </CardHeaderText>
            </CardHeader>
            <CardBody>
              <CardBodyText>
                <p>
                  Become a member of a huge community of developers supporting
                  MUI. You can:
                </p>
                <ul>
                  <li>
                    Add new features by{" "}
                    <Link to="/" className="color-link">
                      submitting a pull request.
                    </Link>
                  </li>
                  <li>
                    Fix bugs or{" "}
                    <Link to="/" className="color-link">
                      {" "}
                      improve our documentation.
                    </Link>
                  </li>
                  <li>
                    Help{" "}
                    <Link to="/" className="color-link">
                      {" "}
                      translate
                    </Link>{" "}
                    the documentation.
                  </li>
                  <li>
                    Answer questions on{" "}
                    <Link to="/" className="color-link">
                      {" "}
                      StackOverflow.
                    </Link>
                  </li>
                </ul>
              </CardBodyText>
              <a
                href="https://t.me/beatyui"
                target="_blank"
                className="d-flex align-items-center link-hover"
              >
                <span className="color-link fs-8rem fw-600">
                  See the repository
                </span>
                <span>
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="#3399ff"
                    width="20px"
                    heigth="20px"
                    data-testid="KeyboardArrowRightRoundedIcon"
                  >
                    <path
                      d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1
                    0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 
                    1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 
                    0-1.42z"
                    ></path>
                  </svg>
                </span>
              </a>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <svg
                fill="#3399ff"
                width="20px"
                heigth="20px"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ForumRoundedIcon"
              >
                <path
                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 
                  1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 
                  13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 
                  1 .45 1 1v10zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 
                  .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 
                  .45-1 1s.45 1 1 1h1c0 .55.45 
                  1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h3z"
                ></path>
              </svg>
              <CardHeaderText className="ms-1">
                Support us financially
              </CardHeaderText>
            </CardHeader>
            <CardBody>
              <CardBodyText>
                If you use BUI in a commercial project and would like to support
                its continued development by becoming a Sponsor
                <br />
                <br />
                All funds donated are managed transparently, and Sponsors
                receive recognition in the README and on the MUI home page.
              </CardBodyText>
              <a
                href="https://t.me/beatyui"
                target="_blank"
                className="d-flex align-items-center link-hover"
              >
                <span className="color-link fs-8rem fw-600">Find it here</span>
                <span>
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="#3399ff"
                    width="20px"
                    heigth="20px"
                    data-testid="KeyboardArrowRightRoundedIcon"
                  >
                    <path
                      d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1
                    0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 
                    1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 
                    0-1.42z"
                    ></path>
                  </svg>
                </span>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
