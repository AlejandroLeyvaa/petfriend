import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';

const destinationPath ='./public/images/pets';
let storage = multer.diskStorage({
  destination: destinationPath,
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  dest: destinationPath
});

const handler = nextConnect({

  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})

handler.use(upload.single('image'));

handler.post((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Image created' });
})


export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;