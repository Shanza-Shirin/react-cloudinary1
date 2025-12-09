import React, { useState } from 'react'
import './App.css'

function App  ()  {
  const[loading, setLoading] = useState(false)
const handleFileUpload = async (event) => {
 const file = event.target.files[0]

 if(!file) return
 setLoading(true)

const data = new FormData()
data.append("file", file)
data.append("upload_preset","first_time_using_cloudinary")
data.append("cloud_name", "dmbnvbppa")
 const res = await fetch("https://api.cloudinary.com/v1_1/dmbnvbppa/image/upload", {
  method:"POST",
  body: data
})

const uploadedImageURL = await res.json()
console.log(uploadedImageURL.url)
setLoading(false)
}

  return (
    <div className="file-upload">
     <div className="upload-container">
     <div className="upload-icon">
      {
        loading ? "Uploading...." : <img src="upload.svg" alt="" />
      }
  
     </div>

     <input
      type="file" 
      className='file-input'
      onChange={handleFileUpload}
      ></input>
     </div>
    </div>
  );
}

export default App