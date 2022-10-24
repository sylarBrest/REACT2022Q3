import { BASE_URL } from 'data/constants';
import { SearchData } from 'data/types';
import { rest } from 'msw';

const mockData: SearchData = {
  hits: [
    {
      collections: 123,
      comments: 2,
      downloads: 1000,
      id: 123456,
      imageHeight: 500,
      imageSize: 3456737,
      imageWidth: 1000,
      largeImageURL: 'path/to/large/image',
      likes: 300,
      pageURL: 'path/to/page/with/image',
      previewHeight: 40,
      previewURL: 'path/to/preview',
      previewWidth: 80,
      tags: 'cars, test',
      type: 'image',
      user: 'sylarBrest',
      userImageURL: 'path/to/user/avatar',
      user_id: 98765,
      views: 2022,
      webformatHeight: 320,
      webformatURL: 'path/to/webformat/image',
      webformatWidth: 640,
    },
  ],
  total: 100,
  totalHits: 20,
};

export const handlers = [
  rest.get<Record<never, unknown>, Record<never, unknown>, SearchData>(
    `${BASE_URL}`,
    (request, response, context) => {
      return response(context.status(200), context.json(mockData));
    }
  ),
];
