import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  changeFilterType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type,
      },
    });
  };

  findPets = () => {
    console.log("I am here!")
    switch (this.state.filters.type) {
      case "all":
        fetch("/api/pets")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pets: data,
            })
          );
        break;
      case "cat":
        fetch("/api/pets?type=cat")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pets: data,
            })
          );
        break;
      case "dog":
        fetch("/api/pets?type=dog")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pets: data,
            })
          );
        break;
      case "micropig":
        fetch("/api/pets?type=micropig")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pets: data,
            })
          );
        break;
      default:
        fetch("/api/pets")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pets: data,
            })
          );
    }

    console.log(this.state.pets);
  };

  changeAdoptStatus = (id) => {
    const index = this.state.pets.findIndex((e) => e.id === id);
    this.state.pets[index].isAdopted = true;
    // this.setState({
    //   pets: [
    //     ...this.state.pets,
    //     [index]: {
    //       ...this.state.pets[index],
    //       isAdopted: true
    //     }
    //   ]
    // })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeFilterType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.changeAdoptStatus} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
