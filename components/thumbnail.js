import { Router } from "next/router"

const Thumbnail = (props) => {

  return (
    <>
      <article className="thumbnail">
        <img src={props.src}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </article>
    </>
  )
}

export default Thumbnail