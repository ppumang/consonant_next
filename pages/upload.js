import FileUploadButton from "../components/FileUploadButton";
import UploadScreenHeader from "../components/UploadScreenHeader";

const upload = (props) => {
    const handleTextChange = (e) => {
        if (!/[^ㄱ-ㅎ]/gi.test(e.target.value)) {
            console.log(e.target.value);
        }
    }
    const handleUploadPost = () => {

    }
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <UploadScreenHeader handleUploadPost={handleUploadPost} />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 800, width: '100%', marginBottom: 20 }}>
                <textarea
                    onChange={handleTextChange}
                    style={{
                        width: '100%',
                        fontFamily: "dongle-light",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: 23,
                        textAlign: "left",
                        color: "#ccc",
                        background: "none",
                        border: "1px solid #444",
                        outline: "none",
                        resize: "none",
                        padding: 10
                    }}
                    placeholder="초성만 입력 가능합니다"
                    rows={10}
                >
                </textarea>
            </div>
            <FileUploadButton />
        </div >
    )
}

export default upload