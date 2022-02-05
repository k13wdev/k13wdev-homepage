import Layout from '../components/layout'
import Intro from '../components/intro'
import About from '../components/about'
import Bio from '../components/bio'
import Social from '../components/social'

const Home = () => {
  return (
    <Layout title="Home">
      <div className="main__wrapper container">  
        <h1 className='sr-only'>Home page</h1>
        <Intro/>
        <About/>
        <Bio/>
        <Social/>
      </div>   
    </Layout>
  )
}

export default Home
