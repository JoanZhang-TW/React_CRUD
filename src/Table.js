import React,{Component} from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
           <th>Name</th>
           <th>Job</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row,index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
      </tr>
    )
  })

  return<tbody>{rows}</tbody>
}

const Table =(props) => {
  const {characterData, removeCharacter} = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
    </table>
  )
}

// class Table extends Component {
//   render() {
//     const {characterData, removeCharacter} = props
//     return (
//      <table>
//          <TableHeader />
//          <TableBody characterData={characterData}/>
//      </table>
//     )
//   }
// }

export default Table


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
