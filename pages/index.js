import Layout from '../components/layout'
import Router from "next/router"
import Intro from '../components/intro'
import About from '../components/about'
import Bio from '../components/bio'
import Social from '../components/social'

const buttonClickHandler = () => {
  Router.push('/work')
}

const Home = () => {
  return (
    <Layout title="Home">
      <div className="main__wrapper container">  
        <Intro/>
        <About/>
        <Bio/>
        <Social/>
      </div>   
    </Layout>
  )
}

export default Home
