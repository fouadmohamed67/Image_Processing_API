import Sharp from 'sharp';
import path from 'path';
const resize_image = async (
  filename: string,
  width: string,
  height: string
): Promise<boolean> => {
  const newWidth: number = +width;
  const newheight: number = +height;
  const pathimage = path.resolve('src/images/full/' + filename + '.png');
  try {
    await Sharp(pathimage)
      .resize(newWidth, newheight)
      .toFile(
        'src/images/thumb/' +
          filename +
          '_' +
          newheight +
          '_' +
          newWidth +
          '.png'
      );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default resize_image;
