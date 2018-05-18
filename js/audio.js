const audio = {
  audioContext: null,
  masterGain: null,
  song: null,
  source: './audio/el-pico.mp3',
  songSource: null,
  setup: function() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.connect(this.audioContext.destination);
  },
  setupSong: function() {
    this.song = new Audio(this.source);
    this.songSource = this.audioContext.createMediaElementSource(this.song);
    this.songSource.connect(this.masterGain);
  }
}
