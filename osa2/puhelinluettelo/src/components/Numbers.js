import React from 'react'

const Numbers = ({ data }) => {
  return (
    <div>
      <h3>Numerot</h3>
      <table>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  )
}

export default Numbers