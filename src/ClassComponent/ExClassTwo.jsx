import React from "react";

class ExClassTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        firstName: "",
        lastName: "",
        group: "",
        mark: "",
        module: "",
      },
      students: [],
      moduleData: [],
    };
    this.groupOptions = ["FS-201", "FS-202", "FS-203"];
    this.moduleOptions = ["Dev-FE", "Dev-BE", "SQL"];
  }

  handleInputChange = (e) => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value,
      },
    });
    console.log(e.target.value);
  };

  handleAddStudent = () => {
    const existingStudent = this.state.students.find(
      (student) =>
        student.firstName === this.state.student.firstName &&
        student.lastName === this.state.student.lastName &&
        student.group === this.state.student.group
    );

    if (!existingStudent) {
      const newStudent = {
        ...this.state.student,
      };
      this.setState({
        students: [...this.state.students, newStudent],
        student: {
          firstName: "",
          lastName: "",
          group: "",
          module: "",
          mark: "",
        },
        moduleData: [
          ...this.state.moduleData,
          { module: newStudent.module, mark: newStudent.mark },
        ],
      });
    } else {
      const updatedStudents = this.state.students.map((student) => {
        if (
          student.firstName === this.state.student.firstName &&
          student.lastName === this.state.student.lastName &&
          student.group === this.state.student.group
        ) {
          return {
            ...student,
            module: this.state.student.module,
            mark: this.state.student.mark,
          };
        }
        return student;
      });

      const newStudentData = {
        module: this.state.student.module,
        mark: this.state.student.mark,
      };

      this.setState({
        students: updatedStudents,
        student: {
          firstName: "",
          lastName: "",
          group: "",
          module: "",
          mark: "",
        },
        moduleData: [...this.state.moduleData, newStudentData],
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.student.firstName}
            onChange={this.handleInputChange}
          />
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={this.state.student.lastName}
            onChange={this.handleInputChange}
          />
          <label htmlFor="group">Group :</label>
          <select name="group" id="group" onChange={this.handleInputChange}>
            {this.groupOptions.map((group) => (
              <option value={group}>{group}</option>
            ))}
          </select>
          <label htmlFor="module">Module :</label>
          <select name="module" id="module" onChange={this.handleInputChange}>
            {this.moduleOptions.map((module) => (
              <option value={module}>{module}</option>
            ))}
          </select>
          <label htmlFor="mark">Mark :</label>
          <input
            type="number"
            name="mark"
            id="mark"
            value={this.state.student.mark}
            onChange={this.handleInputChange}
            min="0"
            max="20"
          />
          <button onClick={this.handleAddStudent}>Add Student</button>
        </div>
        {this.state.students.map((student) => (
          <div>
            <p>First Name : {student.firstName}</p>
            <p>last Name : {student.lastName}</p>
            <p>group : {student.group}</p>
          </div>
        ))}
        <table>
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Module Mark</th>
            </tr>
          </thead>
          <tbody>
            {this.state.moduleData.map((data) => (
              <tr>
                <td>{data.module}</td>
                <td>{data.mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ExClassTwo;
