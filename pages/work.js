import Layout from '../components/layout'
import Thumbnails from '../components/thumbnail'


const Work = () => {
  return (
    <Layout title="Work">
      <div className="main__wrapper container"> 
        <h1 className='title'>My works</h1>
        <Thumbnails 
          src="123"
          title="123"
          description="sad"
        />
      </div>
    </Layout>
  )
}

export default Work
