import {
  environment
} from '../../environment';

class Service {
  async request({url, method = 'GET', body = {}, headers = {}}) {
    const config = {
      method,
      body,
      headers
    };

    if (method === 'GET') {
      delete config.body;
    }

    if (method === 'DELETE') {
      delete config.body;
      delete config.headers;
    }

    const response = await fetch(`http://10.3.0.121:3000/${url}`, config)
    .then(response => response.json());

    return response
  }
}

export {
  Service
}