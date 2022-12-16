import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  console.log(router.query)

  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
