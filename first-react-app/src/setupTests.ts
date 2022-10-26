import '@testing-library/jest-dom';

import { localStorageMock } from 'mocks/mockData';
import { server } from 'mocks/server';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
