import Image from "next/image"

const Intro = () => {
  return (
    <section className="intro">
      <p className="greeting intro__greeting">Hello, I’m a junior front-end developer!</p>
      <h2 className="name intro__name">Kirill Bogomolov</h2>
      <div className="avatar intro__avatar">
        <Image src="/avatar.jpg" width="160" height="160"/>
      </div>
    </section>
  )
}

export default Intro