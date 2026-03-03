
  //Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbxf_klIIx9c8R42lTNmNfCcv9JyxCro-Yo3wVq5Fui4f6fQgSXqZtK1JkCw6noblV7i/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });

  var form2 = document.forms['google-sheet2'];
  form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });
