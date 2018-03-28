function onEdit(e){
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  var ui = SpreadsheetApp.getUi();
  var protection = range.protect().setDescription('Automatisch generierter Zellenschutz');
  var me = Session.getEffectiveUser();
  try {
    protection.addEditor(me);  
    protection.removeEditors(protection.getEditors());
    protection.setDomainEdit(false);
  }   catch (e) {
    var response = ui.alert('Error'+e.message, ui.ButtonSet.OK);
  }
   var response = ui.alert('Vielen Dank für ihren Eintrag \n sollten Sie ihre Daten ändern wollen bitte wenden Sie sich an ...', ui.ButtonSet.OK);
}