import './LandingPage.css'
import Search from '../search/Search'
import PropTypes from 'prop-types'

const LandingPage = ({ search }) => {
  return (
    <section className='landing-page-section'>
      <div className='main-text'>
        <h1 className='main-title'>FOMA</h1>
        <h2 className='subtitle'>Fear of Missing Art</h2>
        <h2 className='dedication'>Art Gallery</h2>
        <Search search={search}/>
      </div>
    </section>
  )
}

LandingPage.propTypes = {
  search: PropTypes.func
}

export default LandingPage