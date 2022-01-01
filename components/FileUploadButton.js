const FileUploadButton = (props) => {

    return (
        <label htmlFor={'input-file'}
            style={{ fontSize: 30, fontFamily: 'dongle-bold', color: '#fff', width: '100%', maxWidth: 800, textAlign: 'center', cursor: 'pointer', border: '1px solid #ccc', padding: 10 }} >
            <input type={'file'} id={'input-file'} hidden
                onChange={props.handleFileChange} />
            이미지 올리기
        </label>
    )
}

export default FileUploadButton;