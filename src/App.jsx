import { collocations } from "./data"

function App() {
  return (
    <main>
      <h1>Collocation</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          {collocations.map(function (item, index) {
            return (
              <tr key={item.english}>
                <td>{index + 1}</td>
                <td>{item.hindi}</td>
                <td>{item.english}</td>
                <td>
                  <ol>
                    {item.examples.map(function (example) {
                      return <li key={example}>{example}</li>
                    })}
                  </ol>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}

export default App;