import { Request, Response } from 'express';

const middleWareImage = async (
  req: Request,
  res: Response,
  next: ()=>void
): Promise<boolean | void> => {
  const width = req.query.width;
  const height = req.query.height;
  const filename = req.query.filename;
  if (!width || !height || !filename) {
    console.log('error in params');
    res.send({"message":"there are parameters not found"})
    return false;
  }
  next();
};
export default middleWareImage;
