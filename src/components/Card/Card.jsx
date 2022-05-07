import React from "react";
import { Link } from "react-router-dom";

import '../Card/Card.css'

export const Card = ({children}) => {
  return <div className="card card-bg">{children}</div> ;
};

export const CardHeader = ({children}) => {
  return <header className="fs-8rem text-white fw-800 ms-3 d-flex align-items-center">{children}</header>
}

export const CardHeaderText = ({children}) => {
  return <span className="fs-8rem text-white fw-800 ms-3 d-flex align-items-center">{children}</span>
}

export const CardBody = ({children}) => {
  return <div className="card-body">{children}</div>
}

export const CardBodyText = ({children}) => {
  return <p className="color-grey fs-superLight">{children}</p>
}

export const CardLink = ({children}) => {
  return <a href={children} className="d-flex align-items-center link-hover">{children}</a>
}
export const CardTag = ({children}) => {
  return <div className='cardTag'>{children}</div>
}