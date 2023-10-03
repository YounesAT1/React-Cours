import React, { Component } from "react";

class TpStagiaireNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stagiaire: {
        nom: "",
        prenom: "",
        groupe: "",
      },
      uneNote: {
        module: "",
        note: 0,
      },
      listeNotes: [],
      resultat: {
        moyenne: 0,
        adminOuNon: "",
      },
    };

    this.groupes = ["groupe1", "groupe2", "groupe3"];
    this.modules = ["module1", "module2"];
    this.totalNote = 0;
  }

  getValue = (event) => {
    const { name, value } = event.target;
    this.setState({
      stagiaire: {
        ...this.state.stagiaire,
        [name]: value,
      },
    });
  };

  getNote = (event) => {
    const { name, value } = event.target;
    this.setState({
      uneNote: {
        ...this.state.uneNote,
        [name]: value,
      },
    });
  };

  ajouter = () => {
    const { note } = this.state.uneNote;
    this.totalNote += parseFloat(note);
    const moyenne = this.totalNote / (1 + this.state.listeNotes.length);
    const adminOuNon = moyenne >= 10 ? "Admin" : "Non Admin";

    this.setState((prevState) => ({
      listeNotes: [...prevState.listeNotes, this.state.uneNote],
      resultat: {
        moyenne: moyenne,
        adminOuNon: adminOuNon,
      },
    }));
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Nom</td>
              <td>
                <input type="text" name="nom" onChange={this.getValue} />
              </td>
            </tr>
            <tr>
              <td>Prénom</td>
              <td>
                <input type="text" name="prenom" onChange={this.getValue} />
              </td>
            </tr>
            <tr>
              <td>Groupe</td>
              <td>
                <select name="groupe" onChange={this.getValue}>
                  {this.groupes.map((g, index) => (
                    <option key={index}>{g}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Module</td>
              <td>
                <select name="module" onChange={this.getNote}>
                  {this.modules.map((m, index) => (
                    <option key={index}>{m}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Note</td>
              <td>
                <input type="number" name="note" onChange={this.getNote} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="button" value="Ajouter" onClick={this.ajouter} />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>nom: {this.state.stagiaire.nom}</p>
          <p>Prénom: {this.state.stagiaire.prenom}</p>
          <p>Groupe: {this.state.stagiaire.groupe}</p>
        </div>
        <div>
          <h3>Les notes</h3>
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listeNotes.map((n, index) => (
                <tr key={index}>
                  <td>{n.module}</td>
                  <td>{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p>Moyenne: {this.state.resultat.moyenne}</p>
          <b>{this.state.resultat.adminOuNon}</b>
        </div>
      </div>
    );
  }
}

export default TpStagiaireNote;
