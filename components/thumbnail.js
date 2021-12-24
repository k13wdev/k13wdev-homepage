const Thumbnail = ({img, title, desc, href}) => {
  return (
    <>
      <article className="thumbnail">
        <img src={img}/>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={href} target="_blank" rel="noreferrer">Source</a>
      </article>
    </>
  )
}

export default Thumbnail