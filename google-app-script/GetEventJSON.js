function getEventJSON(eventName) {
  var username = PropertiesService.getScriptProperties().getProperty("VH_Username");
  var password = PropertiesService.getScriptProperties().getProperty("VH_Password");
  
  if(!eventName) return "eventName required";
  
  var auth = 'Basic ' + Utilities.base64Encode(username + ':' + password).toString()
  var url = 'https://denver.volunteerhub.com/api/v1/events?query=Time&earliestTime=2018-06-14T01:00:00';
  var header = {'Authorization': auth}
  var options = {'headers' : header}
  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();
  var context = response.getContentText();
  var parsed = JSON.parse(context);
  
  var matchingEvents = parsed.filter(function(e) { return e.Name === eventName; });
  
  if(matchingEvents.length < 1) return "No events with name matching '" + eventName + "'";
  
  var event = matchingEvents[0];
  var userRegistrations = event.UserGroupRegistrations.reduce(function(prev, curr) { return prev.concat(curr.UserRegistrations); }, []);
  
  return userRegistrations.length;
}