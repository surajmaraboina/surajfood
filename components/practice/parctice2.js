import React from "react";
import ReactDom from "react-dom/client";

const Parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "child1" }, [
      React.createElement("h1", { id: "h1-tag", key: "h1-1" }, "h1 tag"),
      React.createElement("h2", { id: "h2-tag", key: "h2-1" }, "h2 tag"),
    ]),
    React.createElement("div", { id: "child", key: "child2" }, [
      React.createElement("h1", { id: "h1-tag", key: "h1-2" }, "h1 tag"),
      React.createElement("h2", { id: "h2-tag", key: "h2-2" }, "h2 tag"),
    ]),
  ]);
  
  
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(Parent);