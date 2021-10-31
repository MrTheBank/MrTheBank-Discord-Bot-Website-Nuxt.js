const axios = require('axios');
const CacheHelper = require('../../helpers/cache');

class Commands {
  async fetch(language) {
    let lang = language === 'en' ? 'en' : 'th';

    const cache = new CacheHelper();

    let info = cache.get('commands', lang);
    if (!info) {
      info = (await axios.get('https://static.maxnus.com/mrthebank-discord/commands-' + lang + '.json')).data;
      cache.set('commands', info, 43200, lang);
    }

    return info;
  }

  async view(req, res) {
    let respond = await this.fetch(req.query.lang);

    res.json(respond);
  }
}

module.exports = Commands;
