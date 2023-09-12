var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existing = this.cache.get(key);
  if (existing) {
    clearTimeout(existing.timeoutId);
    existing.value = value;
    existing.timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    return true;
  } else {
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, {
      value,
      timeoutId,
    });
    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  const entry = this.cache.get(key);
  if (entry) return entry.value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existing = this.cache.get(key);
  if (existing) {
    clearTimeout(existing.timeoutId);
    existing.value = value;
    existing.timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    return true;
  } else {
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, {
      value,
      timeoutId,
    });
    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  const entry = this.cache.get(key);
  if (entry) return entry.value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
