import React, { Component } from "react";
import axios from "axios";
import sortBy from "lodash/sortBy";
import { Table, Image } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
class App extends Component {
  state = {
    recent: [],
    alltime: [],
    arrangeByName: [],
    CURRENT: true,
    CAPITALIZED: false
  };

  getFlow(url, stateName) {
    axios.get(url).then(({ data }) => {
      if (stateName === "recent") data = sortBy(data, ["recent"]).reverse();
      else if (stateName === "alltime")
        data = sortBy(data, ["alltime"]).reverse();
      else data = sortBy(data, ["username"]);

      this.setState({ [stateName]: data });
    });
  }

  arrangeBy(value) {
    if (this.state.CURRENT !== value)
      this.setState({ CURRENT: value, CAPITALIZED: false });
  }
  componentDidMount() {
    const url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    this.getFlow(url, "recent");
    this.getFlow(url, "alltime");
    this.getFlow(url, "arrangeByName");
  }

  render() {
    const { recent, alltime, CURRENT, CAPITALIZED, arrangeByName } = this.state;

    return (
      <div className="App container">
        <div className="title">Campers</div>
        <div className="subtitle">
          <i>you can choose Name, Recent, All Time to be sorted</i>
        </div>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>num</th>
              <th
                onClick={e => {
                  this.setState({ CAPITALIZED: true, CURRENT: false });
                }}
              >
                Leader {CAPITALIZED && <i className="fa fa-caret-down" />}
              </th>
              <th onClick={e => this.arrangeBy(true)}>
                Recent Posts {CURRENT && <i className="fa fa-caret-down" />}
              </th>
              <th onClick={e => this.arrangeBy(false)}>
                All Time Posts{" "}
                {!CURRENT && !CAPITALIZED && <i className="fa fa-caret-down" />}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* ()裡面放DOM，是{}才放程式碼 */}
            {CURRENT &&
              !CAPITALIZED &&
              recent.map((guy, i) => (
                <tr key={guy.username}>
                  <td>{i + 1}</td>
                  <td className="guyInfo">
                    <Image className="img" src={guy.img} />
                    <a
                      className="guyLink"
                      href={`https://www.freecodecamp.org/${guy.username}`}
                    >
                      {guy.username}
                    </a>
                  </td>
                  {/* if ignore input "e=>", then infinte loop and slow ur laptop */}
                  <td>{guy.recent}</td>
                  <td>{guy.alltime}</td>
                </tr>
              ))}

            {!CURRENT &&
              !CAPITALIZED &&
              alltime.map((guy, i) => (
                <tr key={guy.username}>
                  <td>{i + 1}</td>
                  <td className="guyInfo">
                    <Image className="img" src={guy.img} />
                    <a
                      className="guyLink"
                      href={`https://www.freecodecamp.org/${guy.username}`}
                    >
                      {guy.username}
                    </a>
                  </td>
                  <td>{guy.recent}</td>
                  <td>{guy.alltime}</td>
                </tr>
              ))}

            {CAPITALIZED &&
              arrangeByName.map((guy, i) => (
                <tr key={guy.username}>
                  <td>{i + 1}</td>
                  <td className="guyInfo">
                    <Image className="img" src={guy.img} />
                    <a
                      className="guyLink"
                      href={`https://www.freecodecamp.org/${guy.username}`}
                    >
                      {guy.username}
                    </a>
                  </td>
                  <td>{guy.recent}</td>
                  <td>{guy.alltime}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
