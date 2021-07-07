import { createServer } from 'miragejs';

import seedHealth from './seed/seedHealth';
import seedPosts from './seed/seedPosts';

export default function MirageServer() {
  return createServer({
    routes() {
      this.get('/api/posts', () => seedPosts);
      this.get('/api/health', () => seedHealth);
      this.get('http://my-json-server.typicode.com/typicode/demo/posts', () => seedPosts);
    },
  });
}
