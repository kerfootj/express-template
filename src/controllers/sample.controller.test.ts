import { getMockReq, getMockRes } from '@jest-mock/express';
import { getSample, postSample } from './sample.controller';

describe(getSample.name, () => {
    const req = getMockReq();
    const { res, clearMockRes } = getMockRes();

    beforeEach(() => {
        clearMockRes();
    });

    it(`returns a json object with a version and message`, async () => {
        await getSample(req, res);

        expect(res.json).toHaveBeenCalledWith({
            version: '1.0.0',
            message: 'Basic Typescript Express started template with Docker.',
        });
    });
});

describe(postSample.name, () => {
    const req = getMockReq({ body: { test: true } });
    const { res, clearMockRes } = getMockRes();

    beforeEach(() => {
        clearMockRes();
    });

    it(`returns a json object with the request body`, async () => {
        await postSample(req, res);

        expect(res.json).toHaveBeenCalledWith({
            input: req.body,
        });
    });
});
