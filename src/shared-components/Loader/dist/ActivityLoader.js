"use strict";
exports.__esModule = true;
// import { Spinner } from "react-bootstrap";
var image_1 = require("next/image");
var ActivityLoader = function () { return (React.createElement("div", { className: "d-flex justify-content-center align-items-center", style: {
        position: "absolute",
        top: "30px",
        left: "0",
        width: "100%",
        height: "100%",
        background: "var(--overlay-light)",
        zIndex: 100
    } },
    React.createElement(image_1["default"], { src: "/loader.gif", alt: "Loader", width: 100, height: 100 }))); };
exports["default"] = ActivityLoader;
