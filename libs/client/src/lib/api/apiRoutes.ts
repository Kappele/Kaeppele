export const ApiRoot = 'http://localhost:3333/api';

export const ApiRoutes: Api = {
  countdown: {
    name: 'countdown',
    get: 'countdown',
  },
};

interface Api {
  [endpoint: string]: ApiEndpoint;
}

interface ApiEndpoint {
  name: string;
  [endpoint: string]: string;
}
