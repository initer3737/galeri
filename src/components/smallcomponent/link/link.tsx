import React from "react";
import select from "../../../assets/select.mp3";
import click from "../../../assets/click.mp3";
import click2 from "../../../assets/click2.mp3";
import { NavLink as Links } from "react-router-dom";
type props = {
  target: string;
  href: string;
  children: JSX.Element;
  isLinkToPage: boolean;
};
export default function Link({ target, children, href, isLinkToPage }: props) {
  let condition;
  switch (isLinkToPage) {
    case false:
      condition = (
        <Links
          to={href}
          onMouseEnter={() => {
            var audio = new Audio(select);
            audio.play();
          }}
          onClick={(e) => {
            var audio = new Audio(click2);
            audio.play();
          }}
        >
          {children}
        </Links>
      );
      break;

    default:
     condition=<a
        href={href}
        target={target}
        onMouseEnter={() => {
          var audio = new Audio(select);
          audio.play();
        }}
        onClick={(e) => {
          var audio = new Audio(click2);
          audio.play();
        }}
      >
        {children}
      </a>;
      break;
  }
  return condition;
}
