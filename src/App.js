import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";

class App extends Component {
  state = {
    citas: []
  };

  crearNuevaCita = (cita) => {
    const citas = [...this.state.citas, cita];


    this.setState({

    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador Pacientes Veterinarias" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
