import './LandingPage.css'
import Search from '../search/Search'
import PropTypes from 'prop-types'

const LandingPage = ({ search }) => {
  return (
    <section className='landing-page-section'>
      <h1 className='main-title'>FOMO</h1>
      <h2 className='subtitle'>Museum of Modern Art</h2>
      <h3 className='dedication'>Dedicated to Moderna and Pfizer</h3>
      <h3 className='dedication'>Courtesy of the Met Gallary</h3>
      <Search search={search}/>
    </section>
  )
}

LandingPage.propTypes = {
  search: PropTypes.func
}

export default LandingPage