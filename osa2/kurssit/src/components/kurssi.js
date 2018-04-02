import React from 'react'

const Sisalto = ({ osat }) => {
  const rows = osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
  return (
    <div>
      {rows}
    </div>
  )
}

const Otsikko = ({ nimi }) => {
  return (
    <h1>{nimi}</h1>
  )
}

const Yhteensa = ({ osat }) => {
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

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

export default Kurssi