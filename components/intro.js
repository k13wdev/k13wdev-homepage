import Image from "next/image"
import { useEffect, useState } from "react"

const Intro = () => {
  const text = 'Hello, I’m a junior front-end developer!'
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(text.slice(0, typedText.length + 1))
    }, 200)

    return () => clearTimeout(timeout)
  }, [typedText])

  return (
    <section className="intro">
      <div className="greeting intro__greeting">
        <sapn className="greeting__text blinking-cursor">{typedText}</sapn>
      </div>
      <h2 className="name intro__name">Kirill Bogomolov</h2>
      <div className="avatar intro__avatar">
        <Image src="/avatar.jpg" width="160" height="160"/>
      </div>
    </section>
  )
}

export default Intro