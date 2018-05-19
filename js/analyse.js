const waveformAnalysis = {
  analyser: null,
  fftSize: 2048,
  bufferLength: 0,
  byteWaveformDataArray: [],
  setup: function() {
    this.analyser = audio.audioContext.createAnalyser();
    audio.masterGain.connect(this.analyser);
    this.analyser.fftSize = this.fftSize; //2048 is the default; could be changed. must be power of two.
    this.bufferLength = this.analyser.frequencyBinCount; //half the fft value
    this.byteWaveformDataArray = new Uint8Array(this.bufferLength);
  },
  getByteWaveformData: function() {
    this.analyser.getByteTimeDomainData(this.byteWaveformDataArray);
  },
  // REPEAT AS MUCH AS POSSIBLE /////////
  updateByteWaveform: function() {
    requestAnimationFrame(this.updateByteWaveform.bind(this));
    this.analyser.getByteTimeDomainData(this.byteWaveformDataArray);
  }
}; //end of waveformAnalysis object

const bargraphAnalysis = {
  analyser: null,
  fftSize: 1024,
  bufferLength: 0,
  byteFreqDataArray: [],
  setup: function() {
    this.analyser = audio.audioContext.createAnalyser();
    audio.masterGain.connect(this.analyser);
    this.analyser.fftSize = this.fftSize; //2048 is the default; could be changed. must be power of two.
    this.bufferLength = this.analyser.frequencyBinCount; //half the fft value
    this.byteFreqDataArray = new Uint8Array(this.bufferLength);
  },
  getByteFreqData: function() {
    this.analyser.getByteFrequencyData(this.byteFreqDataArray);
  },
  updateFreqBarGraph: function() {
    requestAnimationFrame(this.updateFreqBarGraph.bind(this));
    this.analyser.getByteFrequencyData(this.byteFreqDataArray);
  }
}
