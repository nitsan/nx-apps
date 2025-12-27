import { myPackage1 } from './my-package1.js';

describe('myPackage1', () => {
  it('should work', () => {
    expect(myPackage1()).toEqual('my-package1');
  });
});
