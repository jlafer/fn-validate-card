let fnPath = Runtime.getFunctions()['helpers'].path;
let fn = require(fnPath);

exports.handler = function(context, event, callback) {
  const { SpeechResult } = event;

  const response = new Twilio.Response();
  response.appendHeader('Content-Type', 'application/json');
  response.setStatusCode(200);
  const data = fn.validateCard(SpeechResult);
  response.setBody(data);
  callback(null, response);
};
