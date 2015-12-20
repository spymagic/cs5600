'use strict';
(function () {
  angular.module('FormBuilderApp').factory('UserService', UserService);
  
  function UserService () {
    var currentUsers = [];
    
    // Find user with given username and password
    function findUserByUsernameAndPassword (username, password, callback) {
      var matchingUser = null;
      
      // iterate over array of current users
      for (var u in currentUsers) {
        var user = currentUsers[u];
        
        // find user with matching username and password
        if (user.username == username && user.password == password) {
          matchingUser = user;
        }
      }
      
      // callback with matched user or null
      callback(matchingUser);
    }
    
    // Find all users
    function findAllUsers (callback) {
      // callback with all current users
      callback(currentUsers);
    }
    
    // Creates a user
    function createUser (user, callback) {
      // add unique guid to user.id
      user.id = guid();
      
      // add user to local array of current users
      currentUsers.push(user);
      
      // callback with new user
      callback(user);
    }

    // Delete a user
    function deleteUserById (user_id, callback) {
      // iterate over array of current users
      var i = currentUsers.length;
      while (i-- >= 0) {
        var user = currentUsers[i];
        
        // find user with matching username and password
        if (user.id == user_id) {
          // remove match from array of current users
          currentUsers.splice(i, 1);
        }
      }
      
      // callback with remaining array of all users
      callback(currentUsers);
    }

    // Update a user with new properties
    function updateUser (user_id, new_user, callback) {
      var updatedUser = null;
      
      // iterate over array of current users
      for (var u in currentUsers) {
        var user = currentUsers[u];
        
        // find user with matching user id
        if (user.id == user_id) {
          updatedUser = user;
          
          // update matching user with new_user properties
          updatedUser.username = new_user.username;
          updatedUser.password = new_user.password;
          updatedUser.email = new_user.email;
          updatedUser.firstname = new_user.firstname;
          updatedUser.lastname = new_user.lastname;
        }
      }
      
      // callback with updated user
      callback(updatedUser);
    }
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    // return all of the functions that have been defined
    return {
      findUserByUsernameAndPassword: findUserByUsernameAndPassword,
      findAllUsers: findAllUsers,
      createUser: createUser,
      deleteUserById: deleteUserById,
      updateUser: updateUser,
      guid: guid
    };
  }
})();