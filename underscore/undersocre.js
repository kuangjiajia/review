(function () {
  var root = (typeof self === "object" && self.self === self && self) ||
    (typeof global === "object" && global.global === global && global) ||
    this ||
    {}


  var _ = function (obj) {
    if (!(this instanceof _)) return new _(obj)
    this.wrapper = obj
  }

  root._ = _

  var isArrayLike = function (collection) {
    var length = collection.length
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
  };

  _.each = function (obj, callback) {
    var length, i = 0

    if (isArrayLike(obj)) {
      length = obj.length;
      for (; i < length; i++) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break
        }
      }
    } else {
      for (i in obj) {
        if (callback.call(obj[i], obj[i], i) === false) {
          break
        }
      }
    }

    return obj
  }


  _.isFunction = function (obj) {
    return typeof obj == 'function' || false
  }

  _.functions = function (obj) {
    var names = []
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key)
    }
    return names.sort()
  };

  /**
   * 在 _.mixin(_) 前添加自己定义的方法
   */
  _.reverse = function (string) {
    return string.split('').reverse().join('')
  }

  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name]
      _.prototype[name] = function () {
        var args = [this._wrapped]

        push.apply(args, arguments)

        return func.apply(_, args)
      }
    })
    return _
  }

  _.mixin(_)

})()