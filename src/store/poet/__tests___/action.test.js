import {GET_POET_SUCCESS, getPoet, getPoetFailure, getPoetRequest, getPoetSuccess} from "../actions";



describe('poet action test', () => {
    it('return object with type and payload', () => {
        const payload = [];
        const expected = {
            type: GET_POET_SUCCESS,
            payload,
        };

        const received = getPoetSuccess(payload);

        expect(received).toEqual(expected);
    });
});

describe('get poet test', () => {
    it('call getPoet with arg getPoetReq', () => {
        const mockFn = jest.fn();

        getPoet()(mockFn);

        expect(mockFn).toHaveBeenCalledWith(getPoetRequest());
    });

    it('call getPoetSuccess', async () => {
        const mockFn = jest.fn();
        const result = ['test'];

        fetchMock.mockResponseOnce(JSON.stringify(result));

        await getPoet()(mockFn);

        expect(mockFn).toHaveBeenLastCalledWith(getPoetSuccess(result));
    });

    it('call getPoetFailure', async () => {
        const mockFn = jest.fn();
        const error = new Error('some err');

        fetchMock.mockRejectOnce(error);

        await getPoet()(mockFn);

        expect(mockFn).toHaveBeenLastCalledWith(getPoetFailure(error));
    });
});