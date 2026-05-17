const movie = JSON.parse(localStorage.getItem("selectedMovie"));

//
// ===== RENDER =====
//

if (movie) {

    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-image").src = movie.image;
    document.getElementById("movie-rating").textContent = movie.rating;
    document.getElementById("movie-duration").textContent = movie.duration;
    document.getElementById("movie-description").textContent = movie.description;
    document.getElementById("movie-genre").textContent = movie.genre;
    document.getElementById("movie-age").textContent = movie.age;
    document.getElementById("breadcrumb-title").textContent = movie.title;
    document.getElementById("showtime-title").textContent = movie.title;
    document.getElementById("movie-actor1img").src = movie.actor1img;
    document.getElementById("movie-actor1role").textContent=movie.actor1role;
    document.getElementById("movie-actor1name").textContent=movie.actor1name;
    document.getElementById("movie-actor2img").src = movie.actor2img;
    document.getElementById("movie-actor2role").textContent=movie.actor2role;
    document.getElementById("movie-actor2name").textContent=movie.actor2name;
    document.getElementById("movie-actor3img").src = movie.actor3img;
    document.getElementById("movie-actor3role").textContent=movie.actor3role;
    document.getElementById("movie-actor3name").textContent=movie.actor3name;
    document.title = movie.title;
}

//
// ===== DAYS =====
//

document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", () => {
        document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
        day.classList.add("active");
    });
});

//
// ===== TIME =====
//

document.querySelectorAll(".times button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".times button").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
    });
});

//
// ===== BOOK SCROLL =====
//

const bookBtn = document.querySelector(".btn.red");

if (bookBtn) {
    bookBtn.addEventListener("click", () => {
        document.getElementById("showtime").scrollIntoView({ behavior: "smooth" });
    });
}

//
// ===== TRAILER =====
//

const watchTrailer = document.getElementById("watchTrailer");
const modal = document.getElementById("trailerModal");
const trailerVideo = document.getElementById("trailerVideo");
const closeBtn = document.querySelector(".close-btn");

if (watchTrailer) {

    watchTrailer.addEventListener("click", (e) => {
        e.preventDefault();

        if (!movie || !movie.trailer) {
            alert("Phim này chưa có trailer!");
            return;
        }

        modal.style.display = "flex";
        trailerVideo.src = movie.trailer;
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        trailerVideo.src = "";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        trailerVideo.src = "";
    }
});
//
// ===== OPEN SEAT MODAL =====
//

const seatModal = document.getElementById("seatModal");
const closeSeat = document.getElementById("closeSeat");

document.querySelectorAll(".times button").forEach(btn => {

    btn.addEventListener("click", () => {

        seatModal.style.display = "flex";
    });
});

// đóng
closeSeat.onclick = () => {

    seatModal.style.display = "none";
};

window.addEventListener("click", (e) => {

    if(e.target === seatModal){

        seatModal.style.display = "none";
    }
});

//
// ===== SELECT SEAT =====
//

const seats = document.querySelectorAll(
    ".seat:not(.booked)"
);

let total = 0;

seats.forEach(seat => {

    seat.addEventListener("click", () => {

        if(seat.classList.contains("selected-seat")){

            seat.classList.remove("selected-seat");

            if(seat.classList.contains("vip")){
                total -= 90000;
            }
            else if(seat.classList.contains("couple")){
                total -= 160000;
            }
            else{
                total -= 60000;
            }
        }
        else{

            seat.classList.add("selected-seat");

            if(seat.classList.contains("vip")){
                total += 90000;
            }
            else if(seat.classList.contains("couple")){
                total += 160000;
            }
            else{
                total += 60000;
            }
        }

        updateTotal();
    });
});

//
// ===== SELECT COMBO =====
//

const combos = document.querySelectorAll(".combo-card");

combos.forEach(combo => {

    combo.addEventListener("click", () => {

        const price = Number(combo.dataset.price);

        combo.classList.toggle("active");

        if(combo.classList.contains("active")){
            total += price;
        }
        else{
            total -= price;
        }

        updateTotal();
    });
});

//
// ===== UPDATE TOTAL =====
//

function updateTotal(){

    document.getElementById("totalPrice")
    .textContent = total.toLocaleString("vi-VN") + "đ";
}

//
// ===== CONTINUE =====
//

document.querySelector(".continue-btn")
.addEventListener("click", () => {

    if(total <= 0){

        alert("Vui lòng chọn ghế!");
        return;
    }

    alert("🎉 Đặt vé thành công!");
});
const ageElement = document.getElementById("movie-age");

ageElement.textContent = movie.age || "P";

// đổi màu theo độ tuổi
switch(movie.age){

    case "P":
    case "5+":
    case "7+":
        ageElement.style.background = "#2ecc71";
        break;

    case "13+":
        ageElement.style.background = "#f1c40f";
        ageElement.style.color = "#000";
        break;

    case "16+":
        ageElement.style.background = "#e67e22";
        break;

    case "18+":
        ageElement.style.background = "#e74c3c";
        break;

    default:
        ageElement.style.background = "#555";
}