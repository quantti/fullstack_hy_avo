import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Otsikko = ({ nimi }) => {
    return (
      <h1>{nimi}</h1>
    )
  }

  const Sisalto = ( {osat} ) => {
    const rows = osat.map(osa => <Osa nimi={osa.nimi} tehtavia={osa.tehtavia} />)
    return (
      <div>
        {rows}
      </div>
    )
  }

  const Yhteensa = ( {osat} ) => {
    const yhteensa = osat.reduce((yhteensa, osa) => {
      return yhteensa + osa.tehtavia 
    }, 0)
    return (
      <p>Yhteensä {yhteensa} tehtävää</p>
    )
  }

  const Osa = (props) => {
    return (
      <p>{props.nimi} {props.tehtavia}</p>
    )
  }
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)