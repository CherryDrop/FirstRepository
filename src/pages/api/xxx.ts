import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    const resObj = { error: `Method '${req.method}' Not Allowed` }
    res.statusCode = 405;
    res.write(JSON.stringify(resObj));
    res.end();
  },
  onError(error, req, res) {
    const resObj = { error: `Sorry something Happened! ${error.message}` }
    res.statusCode = 501;
    res.write(JSON.stringify(resObj));
    res.end();
  }
});

// Process a POST request
apiRoute.get((req, res) => {
  const resObj = { data: 'success' }
  res.statusCode = 200;
  res.write(JSON.stringify(resObj));
  res.end();
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });


// apiRoute.use(upload.array('theFiles'));

// apiRoute.post((req, res) => {
//   const resObj = { data: 'success' }
//   res.statusCode = 200;
//   res.write(JSON.stringify(resObj));
//   res.end();
// });

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

const upload = multer({ 
  storage ,
  fileFilter(req, file, callback) {
    checkFileType(file, callback);
  },
  limits: { fileSize: 4000000, files: 1}
});


apiRoute.post(upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'No file was uploaded' });
    return;
  }
  // Only allow png and jpeg image files
  if (!req.file.mimetype.startsWith('image/png') && 
  !req.file.mimetype.startsWith('image/jpeg') &&
  !req.file.mimetype.startsWith('image/gif') &&
  !req.file.mimetype.startsWith('image/jpg')) {
    res.status(400).json({ error: 'Invalid file type' });
    return;
  }
  // continue your logic here 
  res.json({ success: `image uploaded successfully` });
});

export default apiRoute;
