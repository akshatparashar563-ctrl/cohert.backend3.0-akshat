const multer = require("multer");

// disk storage for local 
const storageForlocal = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"uploads/");
    },
    filename: (req,file,cb) => {

        // size and ratio and format check kr sakte ho 

        console.log("in filename->", file);
        cb(null, Date.now() +  "-" + file.originalname);
    },
});

// server
const storageForserver = multer.memoryStorage();

const upload = multer({storage: storageForserver});

module.exports = upload;