import './LandingPage.css'
import Search from '../search/Search'
import PropTypes from 'prop-types'

const LandingPage = ({ search, setSearchTerm }) => {
  return (
    <section className='landing-page-section'>
      <div className='main-text'>
        <h1 className='main-title'>FOMA</h1>
        <h2 className='subtitle'>Fear of Missing Art</h2>
        <h2 className='dedication'>Art Gallery</h2>
        <Search search={search} setSearchTerm={setSearchTerm}/>
      </div>
    </section>
  )
}

LandingPage.propTypes = {
  search: PropTypes.func,
  setSearchTerm: PropTypes.func
}

export default LandingPage