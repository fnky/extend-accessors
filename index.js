function extend (to, from) {
  if (!from || typeof from !== 'object') return to

  var keys = Object.keys(from)
  var i = keys.length

  while (i--) {
    var descriptor = Object.getOwnPropertyDescriptor(from, keys[i])
    if (descriptor && (!descriptor.writable ||
                       !descriptor.configurable ||
                       !descriptor.enumerable ||
                       descriptor.get ||
                       descriptor.set)) {
      Object.defineProperty(to, keys[i], descriptor)
    } else {
      to[keys[i]] = from[keys[i]]
    }
  }
  return to
}

module.exports = extend
