import Link from "next/link";

const UploadButton = (props) => {
    return (
        <div style={{ width: '100%', borderRadius: 10, borderWidth: 1, borderColor: 'orange', display: 'flex', justifyContent: 'center', marginBottom: 15 }}>
            <Link href={'/upload'}>
                <div style={{ maxWidth: 800, cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '100%', border: '1px solid #fff', padding: 10, borderRadius: 5 }}>
                    <img src={'/icons/plus-white.png'} width={40} />
                </div>
            </Link>
        </div>
    )
}

export default UploadButton