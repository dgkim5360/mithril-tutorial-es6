import m from "mithril";

// a model as a plain javascript object
const User = {
  list: [],
  loadList: () => {
    return m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users",
      withCredentials: true,
    }).then(result => {
      User.list = result.data;
    });
  },
  current: {},
  load: id => {
    return m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users/:id",
      data: {id: id},
      withCredentials: true,
    }).then(result => {
      User.current = result;
      console.log(User.current);
    });
  },
  save: () => {
    return m.request({
      method: "PUT",
      url: "https://rem-rest-api.herokuapp.com/api/users/:id",
      data: User.current,
      withCredentials: true,
    });
  },
}

export default User;

/* traditional javascript
========================= */
// var m = require("mithril")
//
// var User = {
//   list: [],
//   loadList: function() {
//     return m.request({
//       method: "GET",
//       url: "https://rem-rest-api.herokuapp.com/api/users",
//       withCredentials: true,
//     })
//     .then(function(result) {
//       User.list = result.data
//     })
//   },
//
//   current: {},
//   load: function(id) {
//     return m.request({
//       method: "GET",
//       url: "https://rem-rest-api.herokuapp.com/api/users/:id",
//       data: {id: id},
//       withCredentials: true,
//     })
//     .then(function(result) {
//       User.current = result
//     })
//   },
//
//   save: function() {
//     return m.request({
//       method: "PUT",
//       url: "https://rem-rest-api.herokuapp.com/api/users/:id",
//       data: User.current,
//       withCredentials: true,
//     })
//   }
// }
//
// module.exports = User
