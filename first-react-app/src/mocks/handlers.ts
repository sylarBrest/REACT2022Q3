import { BASE_URL } from 'data/constants';
import { rest } from 'msw';
import { goodSearch, mockData, mockEmptyData } from './mockData';

export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      req.url.searchParams.get('q') === goodSearch || req.url.searchParams.get('id')
        ? ctx.json(mockData)
        : ctx.json(mockEmptyData)
    );
  }),
];
