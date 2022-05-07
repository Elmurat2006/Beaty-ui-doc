import React from "react";

export const CommentTag = ({children}) => {
  return <code>{children}</code>
}

export const NpmTags = ({children}) => {
  return <p className="text-white fs-megaLight fw-600 mt-1">{children}</p>
};


