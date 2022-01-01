const CommentList = (props) => {
    console.log("CommentList", props.comments)
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            {
                props.comments.map(x => (
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', width: 90 }}>
                            <img src={'/images/default_profile.png'} width={20} height={20} style={{ borderRadius: 3, marginRight: 5 }} />
                            <span style={{ fontFamily: 'dongle-light', fontSize: 25, color: '#fff' }}>ㅇㅁ</span>
                        </div>
                        <span style={{ fontFamily: 'dongle-light', fontSize: 25, color: '#fff' }}>{x}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentList