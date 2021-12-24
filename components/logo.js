import Link from 'next/link'

const Logo = () => {
  return (
    <h1>
      <Link href="/">
        <a className='logo'>
        &lt;k13wdev/&gt;
        </a>
      </Link>
    </h1>
  )
}

export default Logo