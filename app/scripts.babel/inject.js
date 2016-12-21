'use strict';

var gistUrl = 'https://api.github.com/gists';
(() => {

console.log('Ready!');
chrome.storage.local.get('apitoken', (saved) => {
  console.log(saved);
  var request = new XMLHttpRequest();
  request.open('GET', gistUrl, {}, populateDom);
  request.onload = populateDom;
  request.setRequestHeader('Authorization', 'token ' + saved.apitoken);
  request.send();
});


function populateDom(data) {
  var result = JSON.parse(data.srcElement.response);
  if (!result || result.length === 0) {
    return;
  }
  // var dom = '<div id="gistlist" class="boxed-group flush" role="navigation"></div>';
  // $('.dashboard-sidebar.column').append(dom);
  var column = document.getElementsByClassName('dashboard-sidebar  column')[0];
  var dom = document.createElement('div');
  dom.className = "boxed-group flush";
  var p = document.createElement('p');
  p.textContent = 'jasldfkjaf';
  dom.appendChild(p);

  // column.appendChild(dom);
  column.insertBefore(dom, column.children[2]);
  var ul = document.createElement('ul');
  console.log(result);

  // console.log(domElement);
  for (let gist of result || []) {
    var x = Object.keys(gist.files).join(', ');
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = x;
    a.href = gist.url;
    li.appendChild(a);
    ul.appendChild(li);
  }
  dom.appendChild(ul);
}

})()
