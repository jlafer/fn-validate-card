let fnsPath = Runtime.getFunctions()['helpers'].path;
let fns = require(fnsPath);

exports.handler = function(context, event, callback) {
  const { SpeechResult } = event;

  const response = new Twilio.Response();
  response.appendHeader('Content-Type', 'application/json');
  response.setStatusCode(200);
  const data = fns.validateCard(SpeechResult);
  response.setBody(data);
  callback(null, response);
};
