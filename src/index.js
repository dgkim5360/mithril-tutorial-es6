import m from "mithril";

import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import Layout from "./views/Layout";

m.route(document.body, "/list", {
  "/list": {
    render: () => m(Layout, m(UserList)),
  },
  "/edit/:id": {
    render: vnode => m(Layout, m(UserForm, vnode.attrs)),
  },
});


/* traditional javascript
========================= */
// var m = require("mithril")
//
// var UserList = require("./views/UserList")
// var UserForm = require("./views/UserForm")
// var Layout = require("./views/Layout")
//
// m.route(document.body, "/list", {
//   "/list": {
//     render: function() {
//       return m(Layout, m(UserList))
//     }
//   },
//   "/edit/:id": {
//     render: function(vnode) {
//       return m(Layout, m(UserForm, vnode.attrs))
//     }
//   },
// })
