const freqAnalysis = {
  analyser: null,
  fftSize: 2048,
  bufferLength: 0,
  byteWaveformDataArray: [],
  floatDataArray: [],
  setup: function() {
    this.analyser = audio.audioContext.createAnalyser();
    audio.masterGain.connect(this.analyser);

    this.analyser.fftSize = this.fftSize; //2048 is the default; could be changed. must be power of two.
    this.bufferLength = this.analyser.frequencyBinCount; //half the fft value

    this.floatDataArray = new Float32Array(this.bufferLength);
    this.byteWaveformDataArray = new Uint8Array(this.bufferLength);
    this.byteFreqDataArray = new Uint8Array(this.bufferLength);
  },
  getByteWaveformData: function() {
    this.analyser.getByteTimeDomainData(this.byteWaveformDataArray);
  },
  // getFloatWaveformData: function() {
  //   this.analyser.getFloatTimeDomainData(this.floatDataArray);
  // },
  getByteFreqData: function() {
    this.analyser.getByteFrequencyData(this.byteFreqDataArray);
  },
  // getFloatFreqData: function() {
  //   this.analyser.getFloatFrequencyData(this.floatDataArray);
  // },

  // REPEAT AS MUCH AS POSSIBLE /////////
  updateFloatWaveform: function() {
    requestAnimationFrame(this.updateFloatWaveform.bind(this));
    this.analyser.getFloatTimeDomainData(this.floatDataArray);
  },
  updateByteWaveform: function() {
    requestAnimationFrame(this.updateByteWaveform.bind(this));
    this.analyser.getByteTimeDomainData(this.byteWaveformDataArray);
  },
  updateFreqBarGraph: function() {
    requestAnimationFrame(this.updateFreqBarGraph.bind(this));
    this.analyser.getByteFrequencyData(this.byteFreqDataArray);
  }
  //   // this.analyser.getFloatFreqeuencyData(this.floatDataArray);
  //   this.analyser.getByteFrequencyData(this.byteDataArray);
  // }
}
