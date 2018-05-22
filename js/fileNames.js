const xoNames = ['Baby Britain', 'Sweet Adeline', 'Tomorrow Tomorrow', 'Bled White', 'Pitseleh','Independence Day',  'Waltz #1'];

const ratatatNames = ['Desert Eagle', 'Crips', 'Cherry', 'Breaking Away', 'El Pico']

const setNames = function(album, songList) {
  for (let i = 0; i < album.length; i++) {
    album[i].file = songList[i];
  }
}
