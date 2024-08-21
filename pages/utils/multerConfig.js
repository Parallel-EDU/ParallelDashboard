import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/srishtismac/Desktop/parallelDashBoard/public');  //I changed here ----<<<<<<<
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); 
  }
});



function checkFileType(file, cb) {
  const filetypes = /mp4|mov|avi|mkv/; 
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Videos Only!');
  }
}



const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 }, 
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

export default upload;
