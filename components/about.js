import Router from 'next/router'

const buttonClickHandler = () => {
  Router.push('/work')
}

export const About = () => {
  return (
    <section className='about'>
      <h2 className='title'>About</h2>
      <p className='text'>Hey! My name is Kirill and I love programming. I got interested in frontend development quite recently. Here are a few technologies I can work with:</p>
      <ul className='numbered-list'>
        <li><span aria-hidden="true">00.</span>HTML5</li>
        <li><span aria-hidden="true">01.</span>Pug</li>
        <li><span aria-hidden="true">02.</span>CSS3</li>
        <li><span aria-hidden="true">03.</span>SCSS</li>
        <li><span aria-hidden="true">04.</span>JavaScript</li>
        <li><span aria-hidden="true">05.</span>Gulp</li>
        <li><span aria-hidden="true">06.</span>Webpack</li>
        <li><span aria-hidden="true">07.</span>Git</li>
        <li><span aria-hidden="true">08.</span>Figma</li>
      </ul>

      <button className='about__button button' onClick={buttonClickHandler}>My portfolio</button>
    </section>
  )
}

export default About