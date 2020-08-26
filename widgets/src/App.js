import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React.js is an open-source JavaScript library that is used for building user interfaces."
  },
  {
    title: "Why use React?",
    content: "React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple."
  },
  {
    title: "How created React?",
    content: "React was originally created by Jordan Walke. Today, React has over a thousand open source contributors."
  }
]

export default () => {
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}
