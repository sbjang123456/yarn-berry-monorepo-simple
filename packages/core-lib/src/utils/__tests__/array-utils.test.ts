import { ArrayUtils } from '../array-utils';

describe('arrayUtils', () => {
  describe('removeItemAtIndex', () => {
    it('should return integer[3] when remove index(1) item', () => {
      expect(ArrayUtils.removeItemAtIndex([1, 2, 3], 1)).toStrictEqual([1, 3]);
    });
    it('should return integer[4] when remove index(2) item', () => {
      expect(ArrayUtils.removeItemAtIndex([1, 2, 3, 4], 2)).toStrictEqual([
        1, 2, 4,
      ]);
    });
  });
});
