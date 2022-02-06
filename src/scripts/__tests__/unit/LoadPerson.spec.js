import LoadPersons from '../../LoadPersons';

import HTTPService from '../../HTTPService';
import UpdateList from '../../UpdateList';

jest.mock('../../HTTPService');

jest.mock('../../UpdateList', () => ({
  // add this method because if delete it, it will cause error of invalid environment
  updateList: jest.fn(),
}));

describe('LoadPerson', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('LoadAllPersons', () => {
    it('should call HTTPService request with appropriate props', () => {
      const mockRequest = jest.fn();
      HTTPService.request.mockImplementationOnce(mockRequest);

      LoadPersons.loadAllPersons();

      expect(mockRequest).toHaveBeenCalled();
      expect(mockRequest).toHaveBeenCalledWith({ path: '/people/' });
    });

    it('should call UpdateList.updateList with appropriate props', async () => {
      const mockRequest = jest.fn(() =>
        Promise.resolve({ data: Symbol.for('data') }),
      );
      HTTPService.request.mockImplementationOnce(mockRequest);

      const mockUpdateList = jest.fn();
      UpdateList.updateList.mockImplementationOnce(mockUpdateList);

      // await 'cause this operation is asynchronous
      await LoadPersons.loadAllPersons();

      expect(mockUpdateList).toHaveBeenCalled();
      expect(mockUpdateList).toHaveBeenCalledWith({ data: Symbol.for('data') });
    });

    it('should do nothing if response rejected', async () => {
      const mockRequest = jest.fn(() => Promise.reject());
      HTTPService.request.mockImplementationOnce(mockRequest);

      const mockUpdateList = jest.fn();
      UpdateList.updateList.mockImplementationOnce(mockUpdateList);

      await LoadPersons.loadAllPersons();

      expect(mockRequest).toHaveBeenCalled();
      expect(mockUpdateList).not.toHaveBeenCalled();
    });
  });
});
