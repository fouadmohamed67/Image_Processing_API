import fs from 'fs';
import path from 'path';
const checImageExist = async (
  imageName: string,
  folderName: string
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

const checkISPositiveNumber = (dimantion: string): boolean => {
  const num: number = +dimantion;
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};

export default { checImageExist, checkISPositiveNumber };
