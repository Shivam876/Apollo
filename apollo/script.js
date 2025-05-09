// Sample doctor data
const doctors = [
    {
        name: "Dr. Shivam Singh",
        specialty: "General Physician",
        experience: "15+ years",
        rating: 4.8,
        availability: "Available Today",
        fee: "₹500",
        image: "/shivam singh.jpg",
        qualifications: "MBBS, MD (Internal Medicine)",
        languages: ["English", "Hindi"]
    },
    {
        name: "Dr. Priya Sharma",
        specialty: "General Physician",
        experience: "12+ years",
        rating: 4.7,
        availability: "Available Tomorrow",
        fee: "₹600",
        image: "/priya.jpg",
        qualifications: "MBBS, DNB (Family Medicine)",
        languages: ["English", "Hindi", "Bengali"]
    },
    {
        name: "Dr. Rahul Mehta",
        specialty: "General Physician",
        experience: "10+ years",
        rating: 4.6,
        availability: "Available Today",
        fee: "₹450",
        image: "/Rahul.avif",
        qualifications: "MBBS, MD (General Medicine)",
        languages: ["English", "Hindi", "Gujarati"]
    },
    {
        name: "Dr. Anjali Gupta",
        specialty: "General Physician",
        experience: "8+ years",
        rating: 4.9,
        availability: "Available Today",
        fee: "₹550",
        image: "/anjli.webp",
        qualifications: "MBBS, DNB (Internal Medicine)",
        languages: ["English", "Hindi", "Marathi"]
    }
];

// DOM Elements
const doctorGrid = document.getElementById('doctorGrid');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const filterInputs = document.querySelectorAll('select');

// Display doctors
function displayDoctors(doctors) {
    doctorGrid.innerHTML = '';
    doctors.forEach(doctor => {
        const doctorCard = `
            <div class="doctor-card">
                <div class="doctor-image">
                    <img src="${doctor.image}" alt="${doctor.name}" 
                        onerror="this.src='assets/default-doctor.jpg'">
                </div>
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <p class="specialty">${doctor.specialty}</p>
                    <p class="experience">${doctor.experience}</p>
                    <p class="qualifications">${doctor.qualifications}</p>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${doctor.rating}</span>
                    </div>
                    <p class="languages">Languages: ${doctor.languages.join(', ')}</p>
                    <p class="fee">Consultation Fee: ${doctor.fee}</p>
                    <p class="availability">${doctor.availability}</p>
                    <button class="book-btn" onclick="bookAppointment('${doctor.name}')">
                        Book Appointment
                    </button>
                </div>
            </div>
        `;
        doctorGrid.innerHTML += doctorCard;
    });
}

// Filter doctors
function filterDoctors() {
    let filteredDoctors = [...doctors];
    const availability = document.getElementById('availability').value;
    const experience = document.getElementById('experience').value;
    const fee = document.getElementById('fee').value;

    if (availability !== 'Any Time') {
        filteredDoctors = filteredDoctors.filter(doc => doc.availability === availability);
    }
    // Add more filter logic here

    displayDoctors(filteredDoctors);
}

// Book appointment
function bookAppointment(doctorName) {
    if (!isLoggedIn()) {
        showLoginModal();
        return;
    }
    alert(`Booking appointment with ${doctorName}`);
}

// Modal functions
function showLoginModal() {
    loginModal.style.display = 'block';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Event listeners
loginBtn.addEventListener('click', showLoginModal);
closeBtn.addEventListener('click', closeLoginModal);
filterInputs.forEach(input => input.addEventListener('change', filterDoctors));

// Initialize
displayDoctors(doctors);