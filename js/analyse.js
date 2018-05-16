
const freqAnalysis = {
  analyser: null,
  bufferLength: 0,
  dataArray: [],
  setup: function() {
    this.analyser = audio.audioContext.createAnalyser();
    audio.masterGain.connect(this.analyser);
  // get frequency information /////////////////
    this.analyser.fftSize = 2048; //this is the default; could be changed. must be power of two.
    this.bufferLength = this.analyser.frequencyBinCount; //half the fft value
    // create an array of relevant type (need Uint8 for .getByteFrequencyData() and .getByteTimeDomainData(), and Float32 for .getFloatFrequencyData() and .getFloatTimeDomainData().)
    // const dataArray = new Uint8Array(bufferLength);
    this.dataArray = new Float32Array(this.bufferLength);

    // call the function to get frequency data
    this.analyser.getFloatTimeDomainData(this.dataArray);
  },
  // repeat as much as possible
  updateWaveform: function() {
    requestAnimationFrame(this.updateWaveform.bind(this));
    this.analyser.getFloatTimeDomainData(this.dataArray);
  }
}
