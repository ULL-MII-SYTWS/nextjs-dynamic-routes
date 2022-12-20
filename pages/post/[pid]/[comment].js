import Link from 'next/link'
import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  console.log(router.query)
  const { pid, comment } = router.query

  return <ul>
    <li>pid: {pid}</li>
    <li>comment: {comment}</li>
    <li>Query:
      <ul>
        {Object.entries(router.query).map(([key, value]) => {
          return <li key={key}>{key}: {value}</li>
        })}
      </ul>
    </li>
    <li><Link href="/"><a>Home</a></Link></li>
  </ul>
}

export default Comment
