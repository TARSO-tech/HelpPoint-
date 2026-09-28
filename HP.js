
<script src="script.js"></script>

const experts = [
{
    name:"Dr. Maria Santos",
    expertise:"Medical",
    rating:4.9,
    distance:"650 m",
    phone:"09171234567",
    image:"https://i.pravatar.cc/150?img=47",
    online:true
},
{
    name:"John Cruz",
    expertise:"Technology",
    rating:4.8,
    distance:"1.2 km",
    phone:"09181234567",
    image:"https://i.pravatar.cc/150?img=12",
    online:false
},
{
    name:"Michael Reyes",
    expertise:"Machine",
    rating:4.7,
    distance:"2.0 km",
    phone:"09192345678",
    image:"https://i.pravatar.cc/150?img=15",
    online:true
},
{
    name:"Pedro Garcia",
    expertise:"Carpentry",
    rating:4.6,
    distance:"900 m",
    phone:"09193456789",
    image:"https://i.pravatar.cc/150?img=22",
    online:true
}
];

const results = document.getElementById("results");
const search = document.getElementById("search");
const category = document.getElementById("category");

document.getElementById("findBtn").addEventListener("click", showExperts);
search.addEventListener("input", showExperts);
category.addEventListener("change", showExperts);

function showExperts(){

    results.innerHTML="";

    const keyword = search.value.toLowerCase();
    const selected = category.value;

    const filtered = experts.filter(expert=>{

        const matchName =
        expert.name.toLowerCase().includes(keyword);

        const matchCategory =
        selected==="" || expert.expertise===selected;

        return matchName && matchCategory;

    });

    if(filtered.length===0){

        results.innerHTML="<h3>No experts found.</h3>";
        return;

    }

    filtered.forEach(expert=>{

        const color =
        expert.expertise.toLowerCase();

        results.innerHTML += `

        <div class="card">

        <img src="${expert.image}">

        <h3>${expert.name}</h3>

        <center>

        <span class="badge ${color}">
        ${expert.expertise}
        </span>

        </center>

        <div class="info">
        ⭐ Rating: ${expert.rating}
        </div>

        <div class="info">
        📍 Distance: ${expert.distance}
        </div>

        <div class="info">
        ${expert.online ? "🟢 Online":"🔴 Offline"}
        </div>

        <div class="actions">

        <button onclick="call('${expert.phone}')">
        📞 Call
        </button>

        <button onclick="sms('${expert.phone}')">
        💬 SMS
        </button>

        <button onclick="favorite('${expert.name}')">
        ❤️
        </button>

        </div>

        </div>

        `;

    });

}

function call(number){
    window.location.href="tel:"+number;
}

function sms(number){
    window.location.href="sms:"+number;
}

function favorite(name){
    alert(name+" added to favorites!");
}

document.getElementById("locationBtn").addEventListener("click",()=>{

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position=>{

            alert(
            "Latitude: "+
            position.coords.latitude+
            "\nLongitude: "+
            position.coords.longitude
            );

        });

    }else{

        alert("Geolocation not supported.");

    }

});

showExperts();

