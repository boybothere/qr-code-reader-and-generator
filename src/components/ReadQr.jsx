import React, { useRef, useState } from 'react'
import QrScanner from "qr-scanner";

const ReadQr = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const fileRef = useRef();
    const handleClick = () => {
        fileRef.current.click();
        console.log(file);
    }

    const handleChange = async (e) => {
        const file = e.target.files[0];
        setFile(file);
        const result = await QrScanner.scanImage(file);
        setData(result);
    }
    return (
        <div className='col-md-4 mx-auto'>
            <h2 className='text-center mb-4'>Read QR Code</h2>
            <div className="card border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={handleClick}
                    >Scan QR Code</button>
                </div>
                <input type="file"
                    name=""
                    id=""
                    ref={fileRef}
                    onChange={handleChange}
                    accept='.png, .jpg, .jpeg'
                    className="d-none"
                />
                <div className='mt-4 d-flex flex-column align-items-center justify-content-center'>
                    {file && (
                        <img src={URL.createObjectURL(file)} alt="QR Code" />
                    )}
                    {data && <p className='display-5 fw-bold mt-5'>{data}</p>}
                </div>
            </div>
        </div>
    )
}

export default ReadQr