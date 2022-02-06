/**
 * @jest-environment jsdom
 */
import MyApp from '../../MyApp';
import LoadPersons from '../../LoadPersons';

jest.mock('../../LoadPersons');

describe('MyApp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('init', () => {
    it('should call LoadPersons.loadAllPersons', () => {
      const mockLoadAllPersons = jest.fn();
      LoadPersons.loadAllPersons.mockImplementationOnce(mockLoadAllPersons);

      MyApp.init();

      expect(mockLoadAllPersons).toHaveBeenCalled();
    });

    it('should call document.appendChild', () => {
      jest.spyOn(document.body, 'appendChild');

      MyApp.init();

      expect(document.body.appendChild).toHaveBeenCalled();
    });
  });
});
