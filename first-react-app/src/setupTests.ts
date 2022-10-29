import '@testing-library/jest-dom';

import { mockLocalStorage } from 'mocks/mockLocalStorage';
import { server } from 'mocks/server';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
