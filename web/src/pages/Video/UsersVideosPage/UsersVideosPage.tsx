import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import VideosCell from 'src/components/Video/VideosCell'

type UsersVideosPageProps = {
  id: number;
}

const UsersVideosPage = ({ id }: UsersVideosPageProps) => {
  return (
    <>
			<MetaTags title='Users Videos' description='List of users videos' />
			<VideosCell userId={id} />
    </>
  )
}

export default UsersVideosPage
