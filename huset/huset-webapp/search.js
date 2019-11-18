window.addEventListener("DOMContentLoaded", getData);


function getData(){
    console.log("getData")
    fetch("http://camelsaidwhat.com/T9WP/wp-json/wp/v2/huset-event?per_page=100&_embed&search=webgl")
    .then(res=>res.json())
    .then(handleData)
}
function handleData(myData){
    console.log(myData)
    myData.forEach(showPost)
}
function showPost(post){
    console.log(post)
    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);
    const h1 = postCopy.querySelector("h1");
    h1.textContent=post.title.rendered;
    const shortdescription = postCopy.querySelector(".shortdescription");
    shortdescription.textContent=post.short_description;
    const eventdate = postCopy.querySelector(".eventdate");
    eventdate.textContent=post.event_date;
    const eventtime = postCopy.querySelector(".eventtime");
    eventtime.textContent=post.event_time;
    const price = postCopy.querySelector(".price");
    price.textContent=post.price;
    
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    
    const img = postCopy.querySelector(".movieposter")
    
    img.setAttribute("src", imgPath)
    img.setAttribute("alt" , "Movie poster" + post.title.rendered)
    
    const a = postCopy.querySelector("a");
    a.href="sub.html?id="+post.id
    
    /*const content = postCopy.querySelector("section");
    content.innerHTML=post.content.rendered;*/
    
    
document.querySelector("#posts").appendChild(postCopy)
    
}