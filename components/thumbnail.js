import Link from "next/link"
import Image from "next/image"

const Thumbnail = (props) => {

  return (
    <>
      <article className="thumbnail">
        <Image src={props.img} alt={props.alt} width={332} height={186.75} layout="responsive"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div>
          <Link href={props.view}>
            <a target="_blank" rel="noreferrer">View -&gt;</a>
          </Link>

          <Link href={props.src}>
            <a target="_blank" rel="noreferrer">SRC/</a>
          </Link>
        </div>
      </article>
    </>
  )
}

export default Thumbnail