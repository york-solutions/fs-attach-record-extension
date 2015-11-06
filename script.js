console.log('fs attach record');

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
  // Add fs-client
  var fsClient = document.createElement('fs-client');
  fsClient.setAttribute('client-id', 'a02j000000AhNBEAA3');
  fsClient.setAttribute('redirect-uri', '/_fs-auth');
  fsClient.setAttribute('environment', 'sandbox');
  fsClient.setAttribute('save-access-token','');
  document.body.appendChild(fsClient);
  
  // Add fs-attach-record
  var attach = document.createElement('fs-attach-record');
  attach.setAttribute('person-id', 'KWCF-GK5');
  attach.setAttribute('url', window.location.href);
  attach.setAttribute('title', document.querySelector('h1').textContent);
  document.querySelector('#attach-to-tree').appendChild(attach);
}

loadResource(chrome.extension.getURL('components.html'))
  .then(setup);
  
