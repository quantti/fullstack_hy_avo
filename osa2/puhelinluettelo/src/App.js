import React from 'react';
import Numbers from './components/Numbers'
import AddForm from './components/AddForm'
import personService from './services/persons'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: null
    }
  }

  componentDidMount() {
    this.updatePersons()
  }

  updatePersons = () => {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const persons = this.state.persons
    
    const newPerson = persons.filter(oldPerson => {
      console.log('old: ', oldPerson.name)
      console.log('new: ', person.name)
      return oldPerson.name.toLowerCase() === person.name.toLowerCase()
    })
    console.log('bool: ', newPerson)

    if (newPerson.length === 0) {
      personService
        .create(person)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            message: person.name + ' lisätty!'
          })
          setTimeout(() => {
            this.setState({ message: null })
          }, 3000);
        })
    } else {
      const result = window.confirm(person.name + " on jo luettelossa, korvataanko numero uudella?")
      if (result) {
        const id = this.state.persons.filter(p => p.name.toLowerCase() === person.name.toLowerCase())[0].id
        personService
          .update(id, person)
          .then(response => {
            personService
              .getAll()
              .then(response => {
                this.setState({
                  persons: response.data,
                  message: person.name + ' numero vaihdettu!'
                })
                setTimeout(() => {
                  this.setState({ message: null })
                }, 3000)
              })
          })
          .catch(error => {
            console.log('error', error)
          })
      }
    }
    this.setState({
      newName: '',
      newNumber: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  deletePerson = (event, person) => {
    const name = person.name
    const result = window.confirm("Haluatko varmasti poistaa henkilön " + name)
    const id = person.id
    if (result) {
      personService
        .deletePerson(id)
        .then(response => {
          const newPersons = this.state.persons.filter(person => person.id !== id)
          console.log('persons: ', newPersons)
          this.setState({
            persons: newPersons,
            message: person.name + ' poistettu luettelosta!'
          })
          setTimeout(() => {
            this.setState({ message: null })
          }, 3000)
        })
        .catch(error => {
          personService
            .getAll()
            .then(response => {
              this.setState({ persons: response.data })
            })
        })
    }
  }

  render() {
    const rows = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map(person => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td><td><button onClick={(e) => this.deletePerson(e, person)}>Poista</button></td></tr>)
    return (
      <div>
        <Notification message={this.state.message} />
        <h2>Puhelinluettelo</h2>
        Rajaa näytettäviä <input value={this.state.filter} onChange={this.handleFilterChange} />
        <AddForm parent={this} />
        <Numbers data={rows} />
      </div>
    )
  }
}

export default App
