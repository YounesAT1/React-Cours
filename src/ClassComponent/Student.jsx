import React from "react";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.students = [
      {
        nom: "student 1",
        prenom: "prenom 1",
        grou: 202,
        module: [
          {
            nom: "module 1",
            coff: 2,
            note: 14,
          },
          {
            nom: "module 2",
            coff: 3,
            note: 14,
          },
        ],
      },
      {
        nom: "student 2",
        prenom: "prenom 2",
        grou: 202,
        module: [
          {
            nom: "module 1",
            coff: 2,
            note: 15,
          },
          {
            nom: "module 2",
            coff: 3,
            note: 16,
          },
        ],
      },
      {
        nom: "student 3",
        prenom: "prenom 3",
        grou: 202,
        module: [
          {
            nom: "module 1",
            coff: 2,
            note: 17,
          },
          {
            nom: "module 2",
            coff: 3,
            note: 18,
          },
        ],
      },
    ];
  }
  render() {
    return (
      <div>
        {this.students.map((student) => (
          <div>
            <p>
              {student.nom} {student.prenom} ({student.grou})
            </p>
            <table style={{ border: "1px solid black" }}>
              <tr style={{ border: "1px solid black" }}>
                <th style={{ border: "1px solid black" }}>Module</th>
                <th style={{ border: "1px solid black" }}>Coff</th>
                <th style={{ border: "1px solid black" }}>note</th>
                <th style={{ border: "1px solid black" }}>totale</th>
              </tr>
              {student.module.map((mod) => (
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>{mod.nom}</td>
                  <td style={{ border: "1px solid black" }}>{mod.coff}</td>
                  <td style={{ border: "1px solid black" }}>{mod.note}</td>
                  <td style={{ border: "1px solid black" }}>
                    {mod.coff * mod.note}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>
    );
  }
}
export default Student;
