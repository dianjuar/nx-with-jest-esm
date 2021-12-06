import { toEsm, change } from '..';

describe('toEsm', () => {
  it('should work', () => {
    expect(toEsm()).toEqual('to-esm');
  });
  
  it('should work2', () => {
    expect(change()).toEqual('fully-esm');
  });
});
