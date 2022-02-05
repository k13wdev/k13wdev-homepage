import Router from 'next/router'

const buttonClickHandler = () => {
  Router.push('/work')
}

export const About = () => {
  const skills = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React', 'Next', 'Gulp', 'Webpack', 'Git', 'Figma', 'Linux']

  return (
    <section className='about'>
      <h2 className='title'>About</h2>
      <p className='text'>Hey! My name is Kirill and I love programming. I got interested in frontend development quite recently. Here are a few technologies I can work with:</p>
      <ul className='numbered-list'>
        {
          skills
            .map((skill, idx) => {
              return <li key={idx}><span aria-hidden="true">{idx <= 9 ? '0' : ''}{idx}.</span>{skill}</li>
            })
        }
      </ul>

      <button className='about__button button' onClick={buttonClickHandler}>My portfolio</button>
    </section>
  )
}

export default About