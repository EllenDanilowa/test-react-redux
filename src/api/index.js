import merchantAPI from './merchant';

const TIMEOUT = 500;

/**
 * Mocking client-server processing
 */
export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts = {}) {
    const { method } = opts;
    const body = opts.body;

    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, TIMEOUT);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/merchants/update') && method === 'PUT': {
            merchantAPI.update(body).then((data) => {
              ok(data);
            });

            break;
          }
          case url.endsWith('/merchants/create') && method === 'POST': {
            merchantAPI.create(body).then((data) => {
              ok(data);
            });

            break;
          }
          case url.endsWith('/merchants') && method === 'GET':
            return ok(merchantAPI.getAll(body));
          case url.match('/merchants') && method === 'DELETE':
            return ok(merchantAPI.delete());
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      function ok(body) {
        resolve({ ok: true, body: JSON.stringify(body) });
      }
    });
  };
}
