//
// ===== BANNER SLIDER =====
//

const slides = document.getElementById("slides");

if (slides) {

    const images = document.querySelectorAll(".slides img");

    let current = 0;

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // cập nhật slide
    function updateSlide() {

        slides.style.transform =
            `translateX(-${current * 100}%)`;
    }

    // next
    nextBtn.addEventListener("click", () => {

        current = (current + 1) % images.length;

        updateSlide();

        resetAutoSlide();
    });

    // prev
    prevBtn.addEventListener("click", () => {

        current =
            (current - 1 + images.length) % images.length;

        updateSlide();

        resetAutoSlide();
    });

    // auto slide
    let autoSlide = setInterval(() => {

        current = (current + 1) % images.length;

        updateSlide();

    }, 3500);

    // reset auto slide
    function resetAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(() => {

            current = (current + 1) % images.length;

            updateSlide();

        }, 3500);
    }
}

//
// ===== CHI TIẾT PHIM =====
//

const movieButtons =
    document.querySelectorAll(".movie-card .btn");

movieButtons.forEach(btn => {

    btn.addEventListener("click", function () {

        const card =
            this.closest(".movie-card");

        // nếu không có data-title thì bỏ qua
        if (!card.dataset.title) return;

        const movie = {

            title: card.dataset.title || "",

            image: card.dataset.image || "",

            rating: card.dataset.rating || "",

            duration: card.dataset.duration || "",

            genre: card.dataset.genre || "",
            actor1img: card.dataset.actor1img || "",
            actor1role: card.dataset.actor1role || "",
            actor1name: card.dataset.actor1name || "",
            actor2img: card.dataset.actor2img || "",
            actor2role: card.dataset.actor2role || "",
            actor2name: card.dataset.actor2name || "",
            actor3img: card.dataset.actor3img || "",
            actor3role: card.dataset.actor3role || "",
            actor3name: card.dataset.actor3name || "",
            trailer: card.dataset.trailer || "",
            age: card.dataset.age || "",
            description:
                card.dataset.description || ""
        };

        localStorage.setItem(
            "selectedMovie",
            JSON.stringify(movie)
        );

        window.location.href =
            "movie-detail.html";
    });
});

//
// ===== POPUP ƯU ĐÃI =====
//

const promoModal =
    document.getElementById("promoModal");

const closePromo =
    document.getElementById("closePromo");

const comboBtn =
    document.querySelector(".combo-btn");

// mở popup combo
if (comboBtn) {

    comboBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        promoModal.style.display = "flex";
    });
}

// đóng popup combo
if (closePromo) {

    closePromo.addEventListener("click", () => {

        promoModal.style.display = "none";
    });
}

//
// ===== POPUP SỰ KIỆN =====
//

const eventModal =
    document.getElementById("eventModal");

const closeEvent =
    document.getElementById("closeEvent");

const specialBtn =
    document.querySelector(".special-btn");

// mở popup sự kiện
if (specialBtn) {

    specialBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        eventModal.style.display = "flex";
    });
}

// đóng popup sự kiện
if (closeEvent) {

    closeEvent.addEventListener("click", () => {

        eventModal.style.display = "none";
    });
}

//
// ===== FORM ĐẶT SỰ KIỆN =====
//

const openBookingForm =
    document.getElementById("openBookingForm");

const bookingModal =
    document.getElementById("bookingModal");

const closeBooking =
    document.getElementById("closeBooking");

const bookingForm =
    document.getElementById("bookingForm");

// mở form
if (openBookingForm) {

    openBookingForm.addEventListener("click", () => {

        bookingModal.style.display = "flex";
    });
}

// đóng form
if (closeBooking) {

    closeBooking.addEventListener("click", () => {

        bookingModal.style.display = "none";
    });
}

// submit form
if (bookingForm) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const bookingData = {

            name:
                document.getElementById("name").value,

            phone:
                document.getElementById("phone").value,

            service:
                document.getElementById("service").value,

            date:
                document.getElementById("date").value,

            note:
                document.getElementById("note").value
        };

        // lưu localStorage
        localStorage.setItem(
            "eventBooking",
            JSON.stringify(bookingData)
        );

        // thông báo
        alert(
            "🎉 Đăng ký thành công! CKB sẽ sớm liên hệ với bạn."
        );

        // reset form
        bookingForm.reset();

        // đóng form
        bookingModal.style.display = "none";
    });
}

//
// ===== CLICK NGOÀI ĐỂ ĐÓNG =====
//

window.addEventListener("click", (e) => {

    // popup combo
    if (e.target === promoModal) {

        promoModal.style.display = "none";
    }

    // popup event
    if (e.target === eventModal) {

        eventModal.style.display = "none";
    }

    // form booking
    if (e.target === bookingModal) {

        bookingModal.style.display = "none";
    }
});