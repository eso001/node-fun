var shows = require('./constants')

console.log(shows.favoriteShow)

for (let i = 0; i < shows.favoriteShows.length; i++) {
  console.log('show:', shows.favoriteShows[i])
}