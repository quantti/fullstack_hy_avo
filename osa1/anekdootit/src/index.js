import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
  }

  showAnecdote = () => {
    this.setState({ selected: Math.floor(Math.random() * anecdotes.length)})
  }

  vote = () => {
    const newVotes = this.state.votes
    newVotes[this.state.selected] += 1
    this.setState({ votes: newVotes })
  }

  render() {
    const votes = this.state.votes[this.state.selected]
    const mostVotes = this.state.votes.indexOf(Math.max(...this.state.votes))
    return (
      <div>
        <button onClick={this.showAnecdote}>show random anecdote</button>
        <br />
        <br />
        <div>
          {this.props.anecdotes[this.state.selected]}
        </div>
        <p>has {votes} votes</p>
        <button onClick={this.vote}>vote for this anecdote</button>
        <h1>Anecdote with most votes:</h1>
        {this.props.anecdotes[mostVotes]}
      </div>
      
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)