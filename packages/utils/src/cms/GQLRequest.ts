import { ENV } from '../env';

type GQLOptions = {
  cache?: RequestCache;
  variables?: any;
};

export class GQLRequest {
  constructor(private readonly endpoint: string) {}

  async request<T>(query: string, opts?: GQLOptions): Promise<T> {
    const variables = opts?.variables || {};
    const cacheOptions = opts?.cache || 'default';
    const cache = ENV.NODE_ENV === 'development' ? 'no-cache' : cacheOptions;

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ENV.BEARER_TOKEN}` },
      body: JSON.stringify({ query, variables }),
      cache,
    });

    const json = await response.json();

    return json.data as T;
  }
}
