
window.function = function (seconds) {
  if (seconds.value === undefined) return undefined;

  var uptime = seconds.value;
  var days = Math.floor(value / 86400);
  uptime -= days * 86400;
  var hours = Math.floor(uptime / 3600);
  uptime -= hours * 3600;
  var minutes = Math.floor(uptime / 60);
  var seconds = Math.round(uptime - minutes * 60);

  var segments = [];

  if (days > 0) segments.push(days + ' day' + ((days == 1) ? '' : 's'));
  if (hours > 0) segments.push(hours + ' hour' + ((hours == 1) ? '' : 's'));
  if (minutes > 0) segments.push(minutes + ' minute' + ((minutes == 1) ? '' : 's'));
  if (seconds > 0) segments.push(seconds + ' second' + ((seconds == 1) ? '' : 's'));
  var uptime_string = segments.join(', ');
  return uptime_string;
}
