import * as mockApi from "./mockApi";

const runMock = {
  successCB: null,
  failureCB: null,

  withFailureHandler(callback) {
    this.failureCB = callback;
    return this;
  },

  withSuccessHandler(callback) {
    this.successCB = callback;
    return this;
  },

  runFunction(f, args) {
    let delay = Math.random() * 1000 + 300;
    setTimeout(() => this.doRunFunction(f, args), delay);
  },

  doRunFunction(f, args) {
    try {
      const result = f(...args);
      if (this.successCB) {
        this.successCB(result);
        this.successCB = null;
      }
    } catch (e) {
      if (this.failureCB) {
        this.failureCB(e);
        this.failureCB = null;
      }
    }
  },
};

// Attach each key in mockApi as a function to runMock
Object.keys(mockApi).forEach((key) => {
  runMock[key] = function (...args) {
    this.runFunction(mockApi[key], args);
  };
});

export default {
  script: {
    run: runMock,
  },
};
