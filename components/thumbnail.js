const Thumbnails = (props) => {
  return (
    <>
      <article>
        <img src={props.src}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </article>
    </>
  )
}

export default Thumbnails