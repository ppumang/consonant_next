import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Logo from '../components/Logo';
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