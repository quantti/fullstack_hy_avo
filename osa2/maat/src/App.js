import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      countries: []
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  selectCountry = (event) => {
    console.log(event.target.innerText)
    this.setState({ filter: event.target.innerText })
  }

  render() {
    const filteredCountries = this.state.countries.filter(c => c.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    if (filteredCountries.length > 10) {
      return (
        <div>
          find countries <input value={this.state.filter} onChange={this.handleFilter} />
          <p>too many matches, specify another filter</p>
        </div>
      )
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      return (
        <div>
          find countries <input value={this.state.filter} onChange={this.handleFilter} />
          <h1>{country.name} {country.nativeName}</h1>
          <p>capital: {country.capital} </p>
          <p>population: {country.population}</p>
          <img src={country.flag} style={{width: '90%'}} />
        </div>
      )
    }
    const rows = filteredCountries.map(c => <p key={c.numericCode} onClick={this.selectCountry} value={c.name} style={{ cursor: 'pointer' }}>{c.name}</p>)
    return (
      <div>
        find countries <input value={this.state.filter} onChange={this.handleFilter} />
        <div>
          {rows}
        </div>
      </div>
    )
  }
}

export default App;
