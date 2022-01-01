import Post from './Post';

const PostList = (props) => {
    let posts = [
        {
            url: 'https://consonantmedia.s3.ap-northeast-2.amazonaws.com/images/newyears.jpeg',
            text: 'ㅇㄷㅇ ㅅㅎㅂ ㅁㅇㅂㅇ~',
            created: Date.now()
        },
        {
            // url: 'https://consonantmedia.s3.ap-northeast-2.amazonaws.com/images/newyears.jpeg',
            text: 'ㅇㄱ ㅁㄴ?',
            created: Date.now()
        }
    ]
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