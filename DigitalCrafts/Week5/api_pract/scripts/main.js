var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});