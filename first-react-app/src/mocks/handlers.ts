import { BASE_URL } from 'data/constants';
import { rest } from 'msw';
import { mockData } from './mockData';

export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
