function includeHTML(url, element) {
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector(element).innerHTML = data;
    });
}
