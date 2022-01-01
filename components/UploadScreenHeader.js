import Logo from './Logo';
import Router from 'next/router'

const UploadScreenHeader = (props) => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', maxWidth: 800, alignItems: 'center' }}>
            <span
                style={{ fontFamily: 'dongle-light', fontSize: 30, color: '#ccc', cursor: 'pointer', width: 100, textAlign: 'left' }}
                onClick={() => Router.back()}
            >ㄷㄹ</span>
            <Logo />
            <span
                style={{ fontFamily: 'dongle-light', fontSize: 30, color: 'dodgerblue', cursor: 'pointer', width: 100, textAlign: 'right' }}
                onClick={props.handleUploadPost}
            >ㅇㄹㄷ</span>
        </div>
    )
}

export default UploadScreenHeader