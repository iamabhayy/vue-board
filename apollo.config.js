// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'vue-board',
        url: 'http://localhost:4000/',
      },
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }