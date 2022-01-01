import moment from "moment"
import { timeDiff } from "../lib/utils";

const Post = ({ post }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 800, padding: 10, backgroundColor: '#444', margin: 1, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img src={'/images/default_profile.png'} width={40} height={40} style={{ borderRadius: 5, marginRight: 10 }} />
                <span style={{ fontFamily: 'dongle-light', color: '#fff', fontSize: 30 }} >익명</span>
            </div>
            {post.url && (
                <img src={post.url} style={{ width: '100%', height: 'auto', borderRadius: 10, marginBottom: 10 }} />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'dongle-light', fontSize: 30 }}>
                <span style={{ color: '#fff' }} >{post.text}</span>
                <span style={{ color: '#aaa' }}>{timeDiff(post.created)}</span>
            </div>
        </div>
    )
}

export default Post;