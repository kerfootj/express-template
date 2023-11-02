import { Request, Response } from 'express';

export async function getSample(req: Request, res: Response) {
    return res.json({
        version: '1.0.0',
        message: 'Basic Typescript Express started template with Docker.',
    });
}

export async function postSample(req: Request, res: Response) {
    return res.json({
        input: req.body,
    });
}
