import axios from "axios";
import Router from "next/router";
import { useState } from "react"
import { BACKEND_URI } from "../env";

const NewComment = (props) => {
    const [comment, setComment] = useState("");
    const handleTextChange = (e) => {
        setComment(e.target.value);
    }
    const handleUpload = async () => {
        if (!comment?.length) {
            return;
        }
        let response = await axios.post(`${BACKEND_URI}/uploader/upload_comment`, {
            text: comment,
            post_id: props.post_id
        });
        response = response.data;
        Router.reload();
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ fontFamily: 'dongle-light', fontSize: 25, color: '#ccc', paddingRight: 10, width: 100 }}>ㅁㅊㄱ</span>
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
                placeholder="초성 맞추기"
                rows={1}
                value={comment}
            >
            </textarea>
            <span
                style={{ fontFamily: 'dongle-light', fontSize: 25, backgroundColor: '#ccc', paddingRight: 10, paddingLeft: 10, borderRadius: 10, width: 100, textAlign: 'center', cursor: 'pointer' }}
                onClick={handleUpload}
            > ㅇㄹㄷ</span>
        </div >
    )
}

export default NewComment