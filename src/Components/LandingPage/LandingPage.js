import './LandingPage.css'
import Search from '../search/Search'

const LandingPage = ({ search }) => {
  return (
    <section>
      <h1>TBD Title</h1>
      <h3>Dedicated to.....</h3>
      <Search search={search}/>
    </section>
  )
  //Need to return the right background on this component!
}

export default LandingPage