import React, { Component } from "react";

class PlayersClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [
        {
          id: 1,
          name: "Team A",
          players: ["Player 1A", "Player 2A", "Player 3A"],
        },
        {
          id: 2,
          name: "Team B",
          players: ["Player 1B", "Player 2B", "Player 3B"],
        },
        {
          id: 3,
          name: "Team C",
          players: ["Player 1C", "Player 2C", "Player 3C"],
        },
      ],
      selectedTeam1: "",
      selectedTeam2: "",
      selectedTeam3: "",
      selectedPlayer: "",
      minutes: "",
      date: "",
      tableData: [],
      goalsData: {},
    };
  }

  handleTeam1Change = (e) => {
    const { value } = e.target;
    this.setState({
      selectedTeam1: value,
      selectedTeam2:
        this.state.selectedTeam2 === value ? "" : this.state.selectedTeam2,
    });
  };

  handleTeam2Change = (e) => {
    const { value } = e.target;
    this.setState({
      selectedTeam2: value,
      selectedTeam1:
        this.state.selectedTeam1 === value ? "" : this.state.selectedTeam1,
    });
  };

  handleTeam3Change = (e) => {
    this.setState({ selectedTeam3: e.target.value });
  };

  handlePlayerChange = (e) => {
    this.setState({ selectedPlayer: e.target.value });
  };

  handleMinutesChange = (e) => {
    this.setState({ minutes: e.target.value });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleGoalRecord = () => {
    const { selectedTeam3, selectedPlayer, minutes, date, goalsData } =
      this.state;

    if (selectedTeam3 && selectedPlayer && minutes && date) {
      const newGoal = {
        team: selectedTeam3,
        player: selectedPlayer,
        minutes,
        date,
      };

      const updatedGoalsData = { ...goalsData };
      if (!updatedGoalsData[selectedTeam3]) {
        updatedGoalsData[selectedTeam3] = [];
      }

      updatedGoalsData[selectedTeam3].push(newGoal);

      this.setState({
        goalsData: updatedGoalsData,
        minutes: "",
        selectedPlayer: "",
      });
    }
  };

  handleSaveMatch = () => {
    const {
      selectedTeam1,
      selectedTeam2,
      selectedTeam3,
      goalsData,
      tableData,
    } = this.state;

    const matchInfo = {
      team1: selectedTeam1,
      team2: selectedTeam2,
      goals: goalsData[selectedTeam3] || [],
    };

    this.setState({
      tableData: [...tableData, matchInfo],
      selectedTeam1: "",
      selectedTeam2: "",
      selectedTeam3: "",
    });
  };

  render() {
    const {
      teams,
      selectedTeam1,
      selectedTeam2,
      selectedTeam3,
      selectedPlayer,
      minutes,
      date,
      tableData,
      goalsData,
    } = this.state;

    return (
      <div>
        <h1>Team Information</h1>
        <div>
          <select value={selectedTeam1} onChange={this.handleTeam1Change}>
            <option value="">Select Team 1</option>
            {teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
          <select value={selectedTeam2} onChange={this.handleTeam2Change}>
            <option value="">Select Team 2</option>
            {teams
              .filter((team) => team.name !== selectedTeam1)
              .map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))}
          </select>
        </div>
        {selectedTeam1 && selectedTeam2 && (
          <div>
            <select value={selectedTeam3} onChange={this.handleTeam3Change}>
              <option value="">Select Team 3</option>
              {teams
                .filter(
                  (team) =>
                    team.name === selectedTeam1 || team.name === selectedTeam2
                )
                .map((team) => (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                ))}
            </select>
            {selectedTeam3 && (
              <div>
                <select
                  value={selectedPlayer}
                  onChange={this.handlePlayerChange}
                >
                  <option value="">Select Player</option>
                  {teams
                    .find((team) => team.name === selectedTeam3)
                    .players.map((player, index) => (
                      <option key={index} value={player}>
                        {player}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  placeholder="Minutes"
                  value={minutes}
                  onChange={this.handleMinutesChange}
                />
                <input
                  type="date"
                  value={date}
                  onChange={this.handleDateChange}
                />
                <button onClick={this.handleGoalRecord}>Record Goal</button>
              </div>
            )}
          </div>
        )}
        <h2>Match Goals</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Player</th>
              <th>Minutes</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(goalsData).map((teamName, index) =>
              goalsData[teamName].map((goal, goalIndex) => (
                <tr key={`${index}-${goalIndex}`}>
                  <td>{goal.team}</td>
                  <td>{goal.player}</td>
                  <td>{goal.minutes}</td>
                  <td>{goal.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button onClick={this.handleSaveMatch}>Save Match</button>
        <h2>Match History</h2>
        <table>
          <thead>
            <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((match, index) => (
              <tr key={index}>
                <td>{match.team1}</td>
                <td>{match.team2}</td>
                <td>
                  <ul>
                    {match.goals.map((goal, goalIndex) => (
                      <li key={goalIndex}>
                        {goal.player} ({goal.team} )
                        <b>
                          {goal.date} ({goal.minutes} Min)
                        </b>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayersClass;
