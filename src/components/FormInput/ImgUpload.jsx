import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useState } from "react";
import TextInput from "./TextInput";

// function ImgUpload() {
//     const [selectedImages, setSelectedImages] = useState([]);

//   const handleImageChange = (event) => {
//     const files = Array.from(event.target.files);
//     const imagePreviews = files.map((file) => URL.createObjectURL(file));
//     setSelectedImages((prevImages) => prevImages.concat(imagePreviews));
//     event.target.value = ''; // Clear the input value
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = selectedImages.filter((_, i) => i !== index);
//     setSelectedImages(newImages);
//   };
//     return (
//         <>
//         <div className="dropzone dz-clickable">
//               <input
//                 type="file"
//                 className="form-control"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImageChange}
//               />
//             </div>
//             <div className="row">
//               {selectedImages.map((image, index) => (
//                 <div key={index} className="col-4 mb-2 position-relative">
//                   <img
//                     src={image}
//                     alt={`Preview ${index + 1}`}
//                     className="img-thumbnail"
//                   />
//                   <button
//                     type="button"
//                     className="btn-close position-absolute top-0 end-0"
//                     aria-label="Close"
//                     onClick={() => handleRemoveImage(index)}
//                   ></button>
//                 </div>
//               ))}
//             </div>

//           </>
//     )
// }
const urlEndpoint="https://ik.imagekit.io/manhtien";

const getPathFromURL = (url) => {
  if(url == '') return '';
  if (url.includes(urlEndpoint)) {
    // Remove the endpoint part from the URL
    return url.replace(urlEndpoint, ''); // Replace the endpoint with an empty string
  } else {
    console.error("Invalid URL: Endpoint does not match");
    return ""; // Return an empty string if the URL doesn't contain the endpoint
  }

};
function ImgUpload({imgUrl, handleChange}) {
  //In order to use the SDK, you need to provide it with a few configuration parameters.
  //The configuration parameters can be applied directly to the IKImage component or using
  //an IKContext component.
  

  // const [imgURL, setImgURL] = useState("");

  return (

    <>
      <div className="mb-3">
        <label className="form-label">Enter Image URL</label>
        <input
          type="text"
          className="form-control"
          value={imgUrl}
          name="imgUrl"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <IKContext
        publicKey="public_OQdu02VjouE8VN10T4L+Yfdk1Wg="
        urlEndpoint={urlEndpoint}
      >
        <IKImage
          path={getPathFromURL(imgUrl)}
          transformation={[{ height: "300", width: "400", crop: "scale" }]}
          className="img-fluid img-thumbnail rounded mb-3 d-flex justify-content-center align-items-center"
        />
      </IKContext>
    </>
  );
}

export default ImgUpload;
