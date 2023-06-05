const subscribers = {};

export const subscribe = (eventName, callback) => {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }
  subscribers[eventName].push(callback);
};

export const unsubscribe = (eventName, callback) => {
  if (subscribers[eventName]) {
    subscribers[eventName] = subscribers[eventName].filter(
      (cb) => cb !== callback
    );
  }
};

export const publish = (eventName, data) => {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((cb) => cb(data));
  }
};
