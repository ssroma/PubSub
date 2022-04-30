export const PubSub = {
  events: {},

  subscribe: function (evtName, fn) {
    this.events[evtName] = this.events[evtName] || [];
    this.events[evtName].push(fn);
  },

  publish: function (evtName, data) {
    console.log(`PubSub broadcasting [ ${evtName} ] width value: [ ${data} ]`);
    if (this.events[evtName]) {
      this.events[evtName].forEach((fn) => {
        fn(data);
      });
    }
  },

  unSubscribe: (evtName) => {
    this.events = this.events.filter((evt) => {
      evt !== evtName;
    });
  },
};
