import fs from 'fs';
import path from 'path';
const checImageExist = async (
  imageName: String,
  folderName: String
): Promise<boolean> => {
  const image_path = path.resolve(
    'src/images/' + folderName + '/' + imageName + '.png'
  );
  if (fs.existsSync(image_path)) {
    return true;
  } else {
    return false;
  }
};

const checkISPositiveNumber = (dimantion: String): boolean => {
  const num: number = +dimantion;
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};

export default { checImageExist, checkISPositiveNumber };
