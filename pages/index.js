import PostList from '../components/PostList';
import Header from '../components/Header';
import UploadButton from '../components/UploadButton';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'column', width: '100%' }}>
      <Header />
      <UploadButton />
      <PostList />
    </div>
  )
}