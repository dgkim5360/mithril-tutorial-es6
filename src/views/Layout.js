import m from "mithril";

class Layout {
  view(vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m("a[href='/list']", {oncreate: m.route.link}, "Users"),
      ]),
      m("section", vnode.children),
    ]);
  }
}

export default Layout;

/* traditional javascript
========================= */
// var m = require("mithril")
//
// module.exports = {
//   view: function(vnode) {
//     return m("main.layout", [
//       m("nav.menu", [
//         m("a[href='/list']", {oncreate: m.route.link}, "Users")
//       ]),
//       m("section", vnode.children)
//     ])
//   }
// }
