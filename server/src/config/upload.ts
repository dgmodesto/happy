import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      try {

        const fileName = `${Date.now()}-${file.originalname}`;

        cb(null, fileName);
      } catch (error) {
        cb(error, 'Ocorreu um erro no upload do arquivo');
      }

    },
  })
}