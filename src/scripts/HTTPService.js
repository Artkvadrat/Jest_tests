const END_POINT = 'https://swapi.dev/api';

class HTTPService {
  async request({ method = 'GET', path }) {
    const url = `${END_POINT}${path}`;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .catch(console.log);
  }
}

export default new HTTPService();
