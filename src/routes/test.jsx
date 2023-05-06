export default function MyComponent() {
  const cloudName = "xxxxxxxxx"; // replace with your own cloud name
  const APIkey = "xxxxxxxx"; //replace with your own api key
  const generateSignature = (callback, paramsToSign) => {
    axios
      .post(url + "sign", paramsToSign)
      .then((response) => {
        const signature = response.data;
        console.log(response);
        callback(signature);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      // uploadPreset: uploadPreset THIS IS NOT NEEDED FOR SIGNED UPLOADS
      apiKey: APIkey,
      uploadSignature: generateSignature,
      resourceType: "image",

      // The below are Additional Options Uncomment to add them //

      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        //This result.info object has all the details we need
        //most importantly you have result.info.url is the final url of
        //the uploaded image or result.info.secure_url for the https one
      } else if (error) {
        console.log("Upload Failed: ", error);
      }
    }
  );
  function handleClick() {
    myWidget.open();
  }
  return (
    <div>
      {/* This button triggers the created widget to launch */}
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}
