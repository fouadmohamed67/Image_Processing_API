import resize_image from '../utils/resize';

describe('test resize function', () => {
  it('check if resizing image working in the right way', async () => {
    expect(await resize_image('download', '500', '500')).toBeTrue();
  });
});
