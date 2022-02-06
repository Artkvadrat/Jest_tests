/**
 * @jest-environment jsdom
 */
import UpdateList from '../../UpdateList';

describe('UpdateList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('updateList', () => {
    it('should append result', () => {
      jest.spyOn(document.body, 'appendChild');

      UpdateList.updateList({
        results: [
          {
            name: 'foo',
            birth_year: '1999',
            gender: 'male',
          },
        ],
      });

      expect(document.body.appendChild).toHaveBeenCalledTimes(1);
    });
  });

  describe('createPerson', () => {
    it('should return proper string', () => {
      const result = UpdateList.createPerson({
        name: 'foo',
        birth_year: '1999',
        gender: 'male',
      });

      expect(result).toBe('foo - 1999 - male');
    });
  });
});
