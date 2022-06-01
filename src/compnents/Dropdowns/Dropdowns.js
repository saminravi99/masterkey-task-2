import React from "react";
import "./Dropdowns.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Dropdowns = () => {
  const { useState } = React;

  const data1 = [
    { id: 0, label: "Istanbul, TR (AHL)" },
    { id: 1, label: "Paris, FR (CDG)" },
  ];
  const data2 = [
    { id: 2, label: "Istanbul, TR (AHL)" },
    { id: 3, label: "Paris, FR (CDG)" },
  ];
  const data3 = [
    { id: 4, label: "Istanbul, TR (AHL)" },
    { id: 5, label: "Paris, FR (CDG)" },
  ];
  const data4 = [
    { id: 6, label: "Istanbul, TR (AHL)" },
    { id: 7, label: "Paris, FR (CDG)" },
  ];
  const data5 = [
    { id: 8, label: "Istanbul, TR (AHL)" },
    { id: 9, label: "Paris, FR (CDG)" },
  ];
  const data6 = [
    { id: 10, label: "Istanbul, TR (AHL)" },
    { id: 11, label: "Paris, FR (CDG)" },
  ];

  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const [isOpen6, setOpen6] = useState(false);
  const [items1] = useState(data1);
  const [items2] = useState(data2);
  const [items3] = useState(data3);
  const [items4] = useState(data4);
  const [items5] = useState(data5);
  const [items6] = useState(data6);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown1 = () => setOpen1(!isOpen1);
  const toggleDropdown2 = () => setOpen2(!isOpen2);
  const toggleDropdown3 = () => setOpen3(!isOpen3);
  const toggleDropdown4 = () => setOpen4(!isOpen4);
  const toggleDropdown5 = () => setOpen5(!isOpen5);
  const toggleDropdown6 = () => setOpen6(!isOpen6);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="mb-5">
      <div className="row mx-auto container">
        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow ">
            <div className="dropdown-header" onClick={toggleDropdown1}>
              <h6>
                {selectedItem
                  ? items1.find((item) => item.id === selectedItem).label
                  : "Capital Profit"}
              </h6>

              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen1 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen1 && "open"}`}>
              {items1.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow ">
            <div className="dropdown-header" onClick={toggleDropdown2}>
              <h6>
                {selectedItem
                  ? items2.find((item) => item.id === selectedItem).label
                  : "Mission & Vision"}
              </h6>
              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen2 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen2 && "open"}`}>
              {items2.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow col-lg-4">
            <div className="dropdown-header" onClick={toggleDropdown3}>
              <h6>
                {selectedItem
                  ? items3.find((item) => item.id === selectedItem).label
                  : "Board of Directors"}
              </h6>
              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen3 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen3 && "open"}`}>
              {items3.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row container mx-auto">
        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow ">
            <div className="dropdown-header" onClick={toggleDropdown4}>
              <h6>
                {selectedItem
                  ? items4.find((item) => item.id === selectedItem).label
                  : "Management / Executive"}
              </h6>
              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen4 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen4 && "open"}`}>
              {items4.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow ">
            <div className="dropdown-header" onClick={toggleDropdown5}>
              <h6>
                {selectedItem
                  ? items5.find((item) => item.id === selectedItem).label
                  : "Career Opportunity"}
              </h6>
              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen5 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen5 && "open"}`}>
              {items5.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="dropdown container my-5 shadow ">
            <div className="dropdown-header" onClick={toggleDropdown6}>
              <h6>
                {selectedItem
                  ? items6.find((item) => item.id === selectedItem).label
                  : "Circulation"}
              </h6>
              <FontAwesomeIcon
                className={`fa fa-chevron-right icon ${isOpen6 && "open"}`}
                icon={faChevronCircleRight}
              />
            </div>
            <div className={`dropdown-body ${isOpen6 && "open"}`}>
              {items6.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItemClick(e.target.id)}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectedItem && "selected"
                    }`}
                  >
                    •{" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
