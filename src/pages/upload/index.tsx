import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileSelect = async e => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    //resize the image
    // const result = convert([file.path, '-resize', '500x500', file.path],
    //     function(err, stdout){
    //         if (err) throw err;
    //         console.log('stdout:', stdout);
    //     }
    // );

    // if(result){
    //     console.log("image resized successfully");
    // } else {
    //     console.log("error resizing image");
    // }
};

const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    try {
    const res = await axios.post('/api/xxx', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
    });
    console.log(res.data);
    } catch (err) {
    console.log(err);
    }
};

return (
    <div>
        <img src={previewUrl} alt="" width="500" height="500" />
        <input type="file" onChange={handleFileSelect} />
        <button className='bg-gray-900 p-2 rounded' 
        onClick={handleUpload}>Upload</button>
        <div className='bg-gray-900 p-2 rounded'>oie</div>
    </div>
);
};

export default ImageUpload;
