import React, { Component } from "react";
import axios from "axios";
class CmpReporteOfrendas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NuevaOfrenda: {
        leader: "",
        subleader: "",
        phoneLeader: "",
        phoneSubleader: "",
        date: "",
        hour: "",
        addressCell: "",
        amount: "",
        planificationDate: "",
        planificationHour: "",
        cellPlanification: [
            {
              privilege: "",
              responsable: "",
            },
          ],
          snack: "",
          Observations: "",
          Asistence: [
            {
              name: "",
              position: "",
            },
          ],
        // Agrega otros campos aquí
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      NuevaOfrenda: {
        ...prevState.NuevaOfrenda,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { NuevaOfrenda } = this.state;

    // Define los datos a enviar en la solicitud POST
    const data = {
      leader: NuevaOfrenda.leader,
      subleader: NuevaOfrenda.subleader,
      phoneLeader: NuevaOfrenda.phoneLeader,
      phoneSubleader: NuevaOfrenda.phoneSubleader,
      date: NuevaOfrenda.date,
      hour: NuevaOfrenda.hour,
      addressCell: NuevaOfrenda.addressCell,
      amount: NuevaOfrenda.amount,
      planificationDate: NuevaOfrenda.planificationDate,
      planificationHour: NuevaOfrenda.planificationHour,
      snack: NuevaOfrenda.snack,
      Observations: NuevaOfrenda.Observations,
      cellPlanification: NuevaOfrenda.cellPlanification.map((item) => ({
        privilege: item.privilege,
        responsable: item.responsable,
      })),
      
      Asistence: NuevaOfrenda.Asistence, 
      // Agrega otros campos aquí según tus necesidades
    };
    console.log(NuevaOfrenda.cellPlanification);


    // Realiza la solicitud POST a la API
    axios
      .post("http://localhost:4000/api/offering", data)
      .then((response) => {
        // Aquí puedes manejar la respuesta exitosa, si es necesario
        console.log("Solicitud POST exitosa", response);
        // También puedes reiniciar los valores de los campos del formulario
        this.setState({
          NuevaOfrenda: {
            leader: "",
            subleader: "",
            phoneLeader: "",
            phoneSubleader: "",
            date: "",
            hour: "",
            addressCell: "",
            amount: "",
            planificationDate: "",
            planificationHour: "",
            cellPlanification: [
                {
                  privilege: [""],
                  responsable: [""],
                },
              ],
            snack: "",
            Observations: "",
            Asistence: [
                {
                  name: [],
                  position: [],
                },
              ],
          },
        });
      })
      .catch((error) => {
        // Maneja los errores en caso de que la solicitud falle
        console.error("Error al realizar la solicitud POST", error);
        alert("No se pudo guardar los datos");
      });
  };
  render() {
    const { NuevaOfrenda } = this.state;
    return (
      <div className="flex flex-col min-h-screen">
        <div className="text-black">
          <form
            onSubmit={this.handleSubmit}
            className="text-center w-1/3 mx-auto p-4 m-40 bg-black bg-opacity-75 shadow-lg rounded  "
          >
            <p className="w-full text-3xl mb-5 text-white"> Reporte Semanal</p>
            <div className="flex flex-wrap mb-5">
              <input
                type="text"
                id="leader"
                name="leader"
                value={NuevaOfrenda.leader}
                onChange={this.handleInputChange}
                placeholder="Líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="phoneLeader"
                name="phoneLeader"
                value={NuevaOfrenda.phoneLeader}
                onChange={this.handleInputChange}
                placeholder="Tel. Líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="subleader"
                name="subleader"
                value={NuevaOfrenda.subleader}
                onChange={this.handleInputChange}
                placeholder="Sub líder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="phoneSubleader"
                name="phoneSubleader"
                value={NuevaOfrenda.phoneSubleader}
                onChange={this.handleInputChange}
                placeholder="Tel. Sublíder"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="date"
                name="date"
                value={NuevaOfrenda.date}
                onChange={this.handleInputChange}
                placeholder="Fecha"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="hour"
                name="hour"
                value={NuevaOfrenda.hour}
                onChange={this.handleInputChange}
                placeholder="Hora"
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                id="addressCell"
                name="addressCell"
                value={NuevaOfrenda.addressCell}
                onChange={this.handleInputChange}
                placeholder="Dirección de célula"
                className="w-full border border-opacity-75 border-black"
              />
            </div>
            <div className="mb-5">
              <label className="mr-5 text-white">Ofrenda</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={NuevaOfrenda.amount}
                onChange={this.handleInputChange}
                placeholder=" Q"
                className="pr-10"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-70 mr-5 text-left text-white">
                Fecha de planificacion:
              </label>
              <input
                type="text"
                id="planificationDate"
                name="planificationDate"
                value={NuevaOfrenda.planificationDate}
                onChange={this.handleInputChange}
                className="w-full"
              />
              <label className="w-70 mr-5 text-left text-white">
                Hora de planificacion:
              </label>
              <input
                type="text"
                id="planificationHour"
                name="planificationHour"
                value={NuevaOfrenda.planificationHour}
                onChange={this.handleInputChange}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap">
  <label className="w-full m-5 text-white">Programa de célula</label>
  <label className="w-1/2 text-white">Privilegio</label>
  <label className="w-1/2 text-white">Responsable</label>
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Privilegio"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Encargado"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Alabanza"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    placeholder="Encargado"
    onChange={this.handleInputChange}
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Dinámica"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Encargado"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Predica"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Encargado"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Ofrenda y oración final"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    name="cellPlanification"
    value={NuevaOfrenda.cellPlanification}
    onChange={this.handleInputChange}
    placeholder="Encargado"
    className="w-1/2 border border-opacity-75 border-black"
  />
  <input
    type="text"
    id="snack"
    name="snack"
    value={NuevaOfrenda.snack}
    onChange={this.handleInputChange}
    placeholder="Refacción"
    className="w-full border border-opacity-75 border-black"
  />
  <input
    type="text"
    id="Observations"
    name="Observations"
    value={NuevaOfrenda.Observations}
    onChange={this.handleInputChange}
    placeholder="Observaciones"
    className="w-full border border-opacity-75 border-black"
  />
</div>
            <div className="flex flex-wrap">
              <label className="w-full m-5 text-white">Asistencia a la célula</label>
              <label className="w-1/2 text-white">Nombre</label>
              <label className="w-1/2 text-white">Líder/Sublíder/Ayuda/Invitado</label>
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
              <input
                type="text"
                placeholder=""
                className="w-1/2 border border-opacity-75 border-black"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-5">
              Registrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CmpReporteOfrendas;