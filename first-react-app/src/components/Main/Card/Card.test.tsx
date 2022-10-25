import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchWrapper from '../SearchWrapper';
import { SearchData } from 'data/types';

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

describe('SearchWrapper component', () => {
  let originalFetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('should render onto the screen api call was successful', async () => {
    render(<SearchWrapper />);
    const searchInput = screen.getByTestId('search-bar') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'ferrari');
    expect(searchInput).toHaveValue('ferrari');
    fireEvent.keyPress(searchInput, { key: 'Enter', charCode: 13 });
    expect(searchInput).toHaveValue('');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByTestId(`card-${mockData.hits[0].id}`)).toBeInTheDocument();
  });
});
