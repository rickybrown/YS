import { Container } from '@material-ui/core';
import Post from '../../components/Post';
import Feed from '../../components/Feed';

export default function PostPage() {
  return (
    <Container maxWidth="md">
      <Post />
      <Feed />
    </Container>
  )
}
