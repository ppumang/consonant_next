import moment from "moment"
import { timeDiff } from "../lib/utils";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

const Post = ({ post }) => {
    console.log({ post })
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 800, padding: 10, backgroundColor: '#444', margin: 1, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img src={'/images/default_profile.png'} width={40} height={40} style={{ borderRadius: 5, marginRight: 10 }} />
                <span style={{ fontFamily: 'dongle-light', color: '#fff', fontSize: 30 }} >ㅇㅁ</span>
            </div>
            {post.mediaUrl && (
                <img src={post.mediaUrl} style={{ width: '100%', height: 'auto', borderRadius: 10, marginBottom: 10 }} />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'dongle-light', fontSize: 30 }}>
                <span style={{ color: '#fff' }} >{post.text}</span>
                <span style={{ color: '#aaa' }}>{timeDiff(post.created)}</span>
            </div>
            {
                post.comments?.length > 0 ? (
                    <CommentList comments={post.comments} />
                ) : <div />
            }
            < NewComment post_id={post._id} />
        </div>
    )
}

export default Post;