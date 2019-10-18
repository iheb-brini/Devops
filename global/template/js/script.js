document.getElementById("getval").addEventListener("click", getT);

function getT() {
    fetch("http://localhost:8081/post")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
}