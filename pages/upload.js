import { useEffect, useState } from "react";
import FileUploadButton from "../components/FileUploadButton";
import UploadScreenHeader from "../components/UploadScreenHeader";
import axios from 'axios'
import Router from "next/router";
import { BACKEND_URI } from "../env";

const Upload = (props) => {
    const [values, setValues] = useState({
        text: '',
        mediaUrl: ''
    })
    const handleTextChange = (e) => {
        if (!/[^ㄱ-ㅎ1-9\s~!@#$%^&*()_+=-]/gi.test(e.target.value)) {
            console.log(e.target.value)
            setValues({ ...values, text: e.target.value })
        }
    }
    const handleUploadPost = async () => {
        if (!values.text?.length) return alert("ㅌㅅㅌㄹ ㅇㄹㅎㅅㅇ");
        try {
            if (values.mediaUrl) {
                let formData = new FormData();
                formData.append("photo", values.mediaUrl);
                formData.append("text", values.text);

                await axios.post(`${BACKEND_URI}/uploader/upload_media`, formData, {
                    headers: { "content-type": "multipart/form-data" },
                });
            } else {
                await axios.post(`${BACKEND_URI}/uploader/upload_text`, {
                    text: values.text
                });
            }
            Router.replace('/');
        } catch (e) {
            console.log({ e })
        }

    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log({ file })
        setValues({ ...values, mediaUrl: file });
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
                    placeholder="ㅊㅅㅁ ㅇㄹ ㄱㄴㅎㄴㄷ"
                    rows={5}
                    value={values.text}
                >
                </textarea>
            </div>
            <FileUploadButton handleFileChange={handleFileChange} />
            {
                values.mediaUrl ? (
                    <div style={{ display: 'flex', margin: 10 }}>
                        <img src={URL.createObjectURL(values.mediaUrl)} style={{ width: '100%', maxWidth: 300, maxHeight: 300 }} />
                        <span
                            style={{ fontSize: 20, color: '#ccc', margin: 10, cursor: 'pointer' }}
                            onClick={() => { setValues({ ...values, mediaUrl: '' }) }}
                        >X</span>
                    </div>
                ) : <div />
            }
        </div >
    )
}

export default Upload