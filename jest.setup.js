import '@testing-library/jest-dom';
import 'whatwg-fetch';

import mirageServer from './src/core/mocks/mirageServer';

let server;

beforeEach(() => (server = mirageServer()));
afterEach(() => server.shutdown());

// TODO: disabling msw while testing mirage-js
// import mswServer from './src/core/mocks/mswServer';

// beforeAll(() => mswServer.listen({ onUnhandledRequest: 'error' }));
// afterEach(() => mswServer.resetHandlers());
// afterAll(() => mswServer.close());
