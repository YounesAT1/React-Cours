import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = "Younes";
    this.lastName = "Ait-talb";
    this.programmingLanguages = ["ReactJS", "JavaScript", "Python"];
    this.logo = "favicon.ico";
    this.objects = [
      { name: "someone1", age: 30 },
      { name: "someone2", age: 31 },
      { name: "someone3", age: 32 },
      { name: "someone3", age: 33 },
    ];
  }
  render() {
    return (
      <div>
        <img src={this.logo} alt="logo" />
        <h3>Your First Name is {this.firstName}</h3>
        <h3>Your Last Name is {this.lastName}</h3>
        {this.programmingLanguages.map((language) => (
          <h1>{language}</h1>
        ))}
        {this.objects.map((object) => (
          <div>
            <p>Name : {object.name}</p>
            <p>age : {object.age}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ClassComponent;
