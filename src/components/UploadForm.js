import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () =>{

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selectedFile = e.target.files[0];

        //console.log(selectedFile)
        
        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        }else{
            setFile(null);
            setError('Please select either png or jpeg file.');
        }
    }

    return(
        <form>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>Choose Images</span>
            </label>
            
        </form>
    )
}

export default UploadForm;