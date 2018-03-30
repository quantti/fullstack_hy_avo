import React, { Component } from 'react';

const Statistics = ({ parent, positiivisia, keskiarvo, yht }) => {
  if (yht > 0) {
    return (
      <div>
        <h1>Statistiikka</h1>
        <table>
          <tbody>
            <Statistic label='hyvä' value={parent.state.hyva} />
            <Statistic label='neutraali' value={parent.state.neutraali} />
            <Statistic label='huono' value={parent.state.huono} />
            <Statistic label='keskiarvo' value={keskiarvo.toFixed(2)} />
            <Statistic label='positiivisia' value={positiivisia.toFixed(2)} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistiikka</h1>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  }

}

const Statistic = ({ label, value }) => {
  return (
    <tr><td>{label}</td><td>{value}</td></tr>
  )
}

const Button = ({ handler, label, name, value }) => {
  return (
    <button value={value} name={name} onClick={handler}>{label}</button>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  buttonHandler = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: Number(event.target.value) + 1 })
  }

  render() {
    const yht = this.state.huono + this.state.neutraali + this.state.hyva
    const keskiarvo = yht > 0 ? (this.state.hyva + this.state.huono * -1) / yht : 0
    const positiivisia = yht > 0 ? this.state.hyva / yht * 100 : 0
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button name='hyva' label='hyvä' handler={this.buttonHandler} value={this.state.hyva} />
        <Button name='neutraali' label='neutraali' handler={this.buttonHandler} value={this.state.neutraali} />
        <Button name='huono' label='huono' handler={this.buttonHandler} value={this.state.huono} />
        <Statistics parent={this} keskiarvo={keskiarvo} positiivisia={positiivisia} yht={yht} />
      </div>
    );
  }
}

export default App;
