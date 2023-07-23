const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dcwx93acc" ,
  api_key: "131139675414321" ,
  api_secret: "9NToNAz2udcNHC9KpdHGbGDR9j0",
});

const cloudinaryUploadImage = async (file,folder = "" , res) => {
   try{
    const data = cloudinary.uploader.upload(file, { resource_type: "auto", folder : `ecommerce/${folder}` });
    return data ;
   }catch(err){
    console.log(err)
    res.status(400).json({success : false, message : err})
   }
};

const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const res = cloudinary.uploader.destroy(imagePublicId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { cloudinaryUploadImage, cloudinaryRemoveImage };
