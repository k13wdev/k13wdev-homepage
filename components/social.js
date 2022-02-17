import Link from "next/link";

const Social = () => {
  return (
    <section className="social">
      <h2 className="title">On the web</h2>
      <ul className="social-list">
        <li>
          <Link href="https://t.me/k13wdev">
            <a target="_blank" rel="noreferrer">My Telegram</a>
          </Link>
        </li>

        <li>
          <Link href="https://github.com/k13wdev">
            <a target="_blank" rel="noreferrer">My GitHub</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Social