import clsx from "clsx";
import React from "react";

export class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  //this function will return array of element 20 divs in this case
  multipleElements(data) {
    let elements = [];
    for (let i = 0; i < (data.row*data.column); i++) {
      elements.push(<div key={i}> element{i + 1} </div>);
    }
    return elements;
  }

  //this function will separate each four element to display
  separateElement(data) {
    var separateElements = [];
    var multiElements = this.multipleElements();

    for (var i = 0; i < multiElements.length; i += data.column) {
      var oneRow = [];
      oneRow.push(
        multiElements.slice(i, i + 4).map((item) => {
          return <div className={clsx(" inline-block")}>{item}</div>;
        })
      );
      separateElements.push(
        oneRow.map((itm) => {
          return <div>{itm}</div>;
        })
      );
    }
    return separateElements;
  }

  render() {
    return <div> {this.separateElement()} </div>;
  }
}