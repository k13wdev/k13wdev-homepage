import Layout from '../components/layout'
import Thumbnail from '../components/thumbnail'

import { works } from '../utils/const'

const Work = () => {

  return (
    <Layout title="Work">
      <div className="main__wrapper container"> 
        <h1 className='title'>My works</h1>
        <div className='work__wrapper'>
          {
            works
              .map((work, idx) => {
                return (
                  <Thumbnail key={idx} img={work.img} alt={work.alt} title={work.title} description={work.description} view={work.view} src={work.src}/>
                )
              })
          }      
        </div>
      </div>
    </Layout>
  )
}

export default Work
