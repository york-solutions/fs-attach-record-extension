function loadResource(url) {
  return new Promise(function(resolve, reject){
    var link = document.createElement('link');
    link.setAttribute('rel', 'import');
    link.setAttribute('href', url);
    link.onload = function() {
      resolve(url);
    };
    document.head.appendChild(link);
  });
}

function setup(){
  // Add fs-client. We can't build it in memory
  // so we have to create and a attach a div then set
  // the div's innerHTML so that it gets parsed all at once.
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.innerHTML = '<fs-client client-id="a02j000000AhNBEAA3" redirect-uri="/_fs-auth" environment="sandbox" save-access-token"></fs-client>';
  
  // Add fs-attach-record
  var attach = document.createElement('fs-attach-record');
  attach.setAttribute('person-id', 'KWCF-GK5');
  attach.setAttribute('url', window.location.href);
  var title = document.querySelector('h1');
  if(title){
    attach.setAttribute('title', title.textContent);
  }
  document.querySelector('#attach-to-tree').appendChild(attach);
}

loadResource(chrome.extension.getURL('components.html'))
  .then(setup);
