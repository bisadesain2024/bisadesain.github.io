// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = e => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach(btn => {
    btn.onclick = e => {
        const img = btn.getAttribute("data-img");
        const title = btn.getAttribute("data-title");
        const description = btn.getAttribute("data-description");
        const price = btn.getAttribute("data-price");
        const oldPrice = btn.getAttribute("data-old-price");

        document.querySelector("#modal-img").src = img;
        document.querySelector("#modal-img").alt = title;
        document.querySelector("#modal-title").innerText = title;
        document.querySelector("#modal-description").innerText = description;
        document.querySelector("#modal-price").innerHTML = `${
            oldPrice ? `<span class="original-price">${oldPrice}</span>` : ""
        } 
    <span class="discounted-price">${price}</span>`;

        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

document.querySelector(".modal .close-icon").onclick = e => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// Klik di luar modal
window.onclick = e => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('button[type="submit"]');
    
    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
        submitButton.style.cursor = allFilled ? 'pointer' : 'not-allowed';
        submitButton.style.opacity = allFilled ? '1' : '0.5';
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
        input.addEventListener('focus', (e) => {
            e.target.closest('.input-group').style.borderColor = '#007bff';
        });
        input.addEventListener('blur', (e) => {
            e.target.closest('.input-group').style.borderColor = '#ccc';
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form melakukan submit default
        
        const nama = form.querySelector('input[placeholder="Nama"]').value;
        const pesan = form.querySelector('input[placeholder="Pesan"]').value;
        const tanya = form.querySelector('input[placeholder="Mau tanya apa silahkan"]').value;
        
        const whatsappNumber = '+62895338499819'; // Ganti dengan nomor WhatsApp tujuan Anda
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Nama: ${nama}\nPesan: ${pesan}\nPertanyaan: ${tanya}`)}`;
        
        window.open(whatsappURL, '_blank');
    });

    // Initial check
    checkInputs();
});





