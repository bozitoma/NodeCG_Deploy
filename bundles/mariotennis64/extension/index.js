'use strict';

var index = (nodecg) => {
  const alert = () => {
    console.log("extension\u306F\u52D5\u3044\u3066\u3044\u307E\u3059");
  };
  nodecg.listenFor("alert", alert);
};

module.exports = index;
//# sourceMappingURL=index.js.map
