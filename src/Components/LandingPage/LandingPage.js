import './LandingPage.css'
import Search from '../search/Search'

const LandingPage = ({ search }) => {
  return (
    <section className='landing-page-section'>
      <h1 className='title'>FOMO</h1>
      <h2 className='subtitle'>Museum of Modern Art</h2>
      <h3 className='dedication'>Dedicated to Moderna and Pfizer</h3>
      <h3 className='dedication'>Courtesy of the Met Gallary</h3>
      <Search search={search}/>
    </section>
  )
  //Need to return the right background on this component!
}

export default LandingPage