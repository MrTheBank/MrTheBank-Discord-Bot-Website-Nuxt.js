const NodeCache = require('node-cache');
const cache = new NodeCache({ checkperiod: 900 });

class Cache {
  constructor() {
    this.cache = cache;
  }

  set(key, objects, ttl, id = '') {
    if (id) {
      id = '_' + id;
    }

    let identifier = key + id;

    return this.cache.set(identifier, objects, ttl);
  }

  get(key, id = '') {
    if (id) {
      id = '_' + id;
    }

    let identifier = key + id;

    return this.cache.get(identifier);
  }

  del(key, id = '') {
    if (id) {
      id = '_' + id;
    }

    let identifier = key + id;

    return this.cache.del(identifier);
  }

  update(key, id = '') {
    if (id) {
      id = '_' + id;
    }

    let identifier = key + id;

    let update = this.cache.get(identifier);
    if (update) {
      this.cache.del(identifier);
    }
    return true;
  }
}

module.exports = Cache;
