import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);
    this.signal = "";
    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };
    this.Converter = this.Converter.bind(this);
    this.render();
  }

  Converter() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=ultra&apiKey=b15c94f33794dc6cef1e`;
   let value = fetch(url);
    const getValue = async () => {
      let resolve = await value;
      resolve = await resolve.json();
      let cotacao = resolve[de_para];
      this.state.moedaA_valor = this.state.moedaA_valor.replace(",", ".");
      if (this.state.moedaA_valor === "") {
        alert("[ERRO] Tente novamente!");
      } else {
        let moedaB_valor = parseFloat(
          this.state.moedaA_valor * cotacao
        ).toFixed(2);
        this.setState({ moedaB_valor });
      }
    };
    try {
      getValue();
    } catch (err) {
      alert(err);
    }
    if (this.props.moedaB === "BRL") {
      this.signal = "R$";
    }
    if (this.props.moedaB === "USD") {
      this.signal = "$";
    }
    if (this.props.moedaB === "CAD") {
      this.signal = "$";
    }
    if (this.props.moedaB === "JPY") {
      this.signal = "¥";
    }
    if (this.props.moedaB === "EUR") {
      this.signal = "€";
    }
  }
  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          className="input"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        ></input>
        <input
          type="button"
          className="botao"
          value="Converter"
          onClick={this.Converter}
        ></input>
        <h2 className="result">{`${this.signal} ${this.state.moedaB_valor}`}</h2>
      </div>
    );
  }
}
