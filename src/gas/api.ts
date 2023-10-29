/* Export all functions you'll want to call with 
google.script.run here -- this will allow our type
definition magic to work, so in your svelte side code
you get clean autocomplete for google.script.run */

export function getActiveUserEmail() {
  const user = Session.getActiveUser();
  return user.getEmail();
}
