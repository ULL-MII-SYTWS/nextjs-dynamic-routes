import Link from 'next/link'

function Home () {
  return (
    <ul>
      <li> This link makes a request to "/post/abc" that &nbsp;
        <Link href='/post/abc'>will be processed by "pages/post/[pid].js"</Link>
      </li>
      <li> This link makes a request to "/post/abc?foo=bar" that &nbsp;
        <Link href='/post/abc?foo=bar'>also goes to pages/post/[pid].js</Link>
      </li>
      <li> This link makes a request to "/post/abc/a-comment" that &nbsp;
        <Link href='/post/abc/a-comment'>
          makes a request to pages/post/[pid]/[comment].js
        </Link>
      </li>
      <li></li>
    </ul>
  )
}

export default Home
