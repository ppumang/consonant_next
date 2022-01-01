import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URI } from '../env';
import Post from './Post';

const PostList = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axios.get(`${BACKEND_URI}/post/get_post_list`);
            let { posts } = data;
            setPosts(posts);
        }
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {
                posts.map((x, idx) => (
                    <Post post={x} key={idx} />
                ))
            }
        </div>
    )
}

export default PostList