'use strict';
(function () {
  angular.module('FormBuilderApp').factory('FormService', FormService);
  
  function FormService (UserService, $log) {
    var forms = [];
    
    // Create a form for a user
    function createFormForUser (userId, form, callback) {
      var newForm = {
        id: UserService.guid(),
        name: form.name,
        userid: userId
      };
      
      // add to local array of forms
      forms.push(newForm);
      
      // callback with new form
      callback(newForm);
    }
    
    // Find all the forms associated with a user with given id
    function findAllFormsForUser (userId, callback) {
      var foundForms = [];
      
      // iterate over array of forms
      for (var f in forms) {
        var form = forms[f];
        
        // find form with matching userid
        if (form.userid == userId) {
          // add form to array of found forms
          foundForms.push(form);
        }
      }
      
      // callback with found forms
      callback(foundForms);
    }
    
    // Delete form with given id
    function deleteFormById (formId, callback) {
      // iterate over array of forms
      var removeForm = null;
      for (var f in forms) {
        var form = forms[f];
        
        // find form with matching formId
        if (form.id == formId) {
          removeForm = f;
        }
      }
      
      // remove match from array of forms
      if (removeForm != null) {
        forms.splice(removeForm, 1);
      }
      
      // callback with remaining array of forms
      callback(forms);
    }
    
    // Update a form with new properties
    function updateFormById (formId, newForm, callback) {
      var updatedForm = null;
      
      // iterate over array of forms
      for (var f in forms) {
        var form = forms[f];
        
        // find form with matching form id
        if (form.id == formId) {
          // update matching form with newForm properties
          form.userid = newForm.userid;
          form.name = newForm.name;
          
          // set updatedForm to be returned
          updatedForm = form;
        }
      }
      
      // callback with updated form
      callback(updatedForm);
    }
    
    return {
      createFormForUser: createFormForUser,
      findAllFormsForUser: findAllFormsForUser,
      deleteFormById: deleteFormById,
      updateFormById: updateFormById
    };
  }
})();