import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
];

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  }
];

const dropdownMessage = "Select a Color";

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <div class="ui toggle checkbox">
        <input type="checkbox" onChange={() => setShowDropdown(!showDropdown)} />
        <label>Toggle Dropdown</label>
      </div>
      {
        showDropdown ?
          <Dropdown selected={selected} onSelectedChange={setSelected} message={dropdownMessage} options={options} />
          : null
      } */}

      <Translate />

    </div>
  )
}
