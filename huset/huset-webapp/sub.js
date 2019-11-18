const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://camelsaidwhat.com/T9WP/wp-json/wp/v2/huset-event/" + id)
    .then(res => res.json())
    .then(showEvent)

function showEvent(event) {
    console.log(event)
    
        const eventdate = document.querySelector(".eventdate");
    eventdate.textContent = event.event_date;
    const eventtime = document.querySelector(".eventtime");
    eventtime.textContent = event.event_time;
    const price = document.querySelector(".price");
    price.textContent = event.price;
    const longdescription = document.querySelector(".longdescription");
    longdescription.innerHTML = event.content.rendered;
    document.querySelector("article h1").textContent = event.title.rendered;

}
