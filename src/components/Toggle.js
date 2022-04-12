import reactDom from "react-dom"
import react from "react"
import Hud from "./Hud"


const Search = () => {
  const [showResults, setShowResults] = react.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div>
       <label type="submit" value="Search" onClick={onClick} tabIndex="0" className="mx-5 mt-5 btn btn-outline btn-success animate-pulse"></label>
      { showResults ? <Results /> : null }
    </div>
  )
}

const Results = () => (
  <div id="results" className="search-results">
<Hud />
  </div>
)

reactDom.render(<Search />, document.querySelector("#hud"))