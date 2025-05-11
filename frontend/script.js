// Form Validation for Sign Up
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    alert('Sign Up Successful! Welcome, ' + username);
    this.reset();
});

// Form Validation for Log In
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('Log In Successful!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// State & District Selection
const districts = {
    'Andhra Pradesh': ['Alluri Sitharama Raju', 'Anakapalli', 'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Kadapa', 'Kakinada', 'Krishna', 'Kurnool', 'Nandyal', 'Nellore', 'Parvathipuram Manyam', 'Prakasam', 'Sri Sathya Sai', 'Srikakulam', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'],
    'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayanagara', 'Vijayapura', 'Yadgir'],
    'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
    'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
    'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem', 'Mahabubabad', 'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri']
};

document.getElementById('state')?.addEventListener('change', function() {
    const state = this.value;
    const districtSelect = document.getElementById('district');
    districtSelect.innerHTML = '<option value="">Select District</option>';

    if (state && districts[state]) {
        districts[state].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});

document.getElementById('locationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;

    if (state && district) {
        localStorage.setItem('selectedDistrict', district);
        window.location.href = 'vegetables.html';
    } else {
        alert('Please select both state and district.');
    }
});

// Vegetable Base Data with Listing Counts
const vegetables = [
    { type: 'Tomato', basePrice: 30, image: 'tomato.jpg', minListings: 8, maxListings: 10 }, // Common
    { type: 'Potato', basePrice: 20, image: 'potato.jpg', minListings: 7, maxListings: 9 },  // Common
    { type: 'Onion', basePrice: 25, image: 'onion.jpg', minListings: 6, maxListings: 8 },    // Common
    { type: 'Carrot', basePrice: 40, image: 'carrot.jpg', minListings: 6, maxListings: 8 },  // Common
    { type: 'Cabbage', basePrice: 15, image: 'cabbage.jpg', minListings: 4, maxListings: 6 },
    { type: 'Spinach', basePrice: 10, image: 'spinach.jpg', minListings: 3, maxListings: 5 },
    { type: 'Brinjal', basePrice: 35, image: 'brinjal.jpg', minListings: 4, maxListings: 6 },
    { type: 'Peas', basePrice: 50, image: 'peas.jpg', minListings: 3, maxListings: 5 },
    { type: 'Cauliflower', basePrice: 20, image: 'cauliflower.jpg', minListings: 4, maxListings: 6 },
    { type: 'Beetroot', basePrice: 30, image: 'beetroot.jpg', minListings: 3, maxListings: 5 },
    { type: 'Radish', basePrice: 25, image: 'radish.jpg', minListings: 3, maxListings: 5 },
    { type: 'Cucumber', basePrice: 15, image: 'cucumber.jpg', minListings: 4, maxListings: 6 },
    { type: 'Ladyfinger', basePrice: 40, image: 'ladyfinger.jpg', minListings: 4, maxListings: 6 },
    { type: 'Chilli', basePrice: 60, image: 'Chilli.jpg', minListings: 3, maxListings: 4 },   // Less common
    { type: 'Pumpkin', basePrice: 12, image: 'Pumpkin.jpg', minListings: 3, maxListings: 4 }, // Less common
    { type: 'Beans', basePrice: 45, image: 'beans.jpg', minListings: 4, maxListings: 6 },
    { type: 'Coriander', basePrice: 8, image: 'coriander.jpg', minListings: 3, maxListings: 4 } // Less common
];

const farmerNames = [
    'Ramesh@123', 'Suresh_99', 'Kavita#45', 'Anil$78', 'Priya_21', 'Vijay#56', 'Manoj@88', 
    'Lakshmi_77', 'Sanjay#33', 'Ravi_12', 'Meena@34', 'Karthik#99', 'Divya_55', 'Arun@22', 
    'Sneha_33', 'Nithin#77', 'Pooja@88', 'Vikram_44', 'Rekha#11', 'Siva@66', 'Geetha_99', 
    'Bharat#22', 'Latha@33', 'Ajay_55', 'Sunita#77', 'Kiran@88', 'Deepa_11', 'Vinod#99', 
    'Shalini@22', 'Prasad_33', 'Anita#44', 'Srinivas@55', 'Radha_66', 'Mahesh#77', 'Jyothi@88', 
    'Gopal_99', 'Uma#11', 'Rahul@44', 'Preeti_66', 'Santosh#88', 'Neha_22', 'Arjun#33', 
    'Swati@55', 'Kiran_77', 'Deepak#99', 'Anusha_11'
];

// Generate Vegetable Data for All Districts
function generateVegetableData() {
    const vegetableData = [];
    const allDistricts = Object.values(districts).flat();

    vegetables.forEach(veg => {
        allDistricts.forEach(district => {
            const numListings = Math.floor(Math.random() * (veg.maxListings - veg.minListings + 1)) + veg.minListings;
            const usedFarmers = new Set(); // Ensure unique farmers per vegetable per district

            for (let i = 0; i < numListings; i++) {
                const priceVariation = Math.floor(Math.random() * 6) - 2; // ±2 to ±5 variation
                const price = Math.max(5, veg.basePrice + priceVariation); // Ensure price isn’t too low
                let farmer;
                do {
                    farmer = farmerNames[Math.floor(Math.random() * farmerNames.length)];
                } while (usedFarmers.has(farmer)); // Avoid duplicates
                usedFarmers.add(farmer);

                const contactNum = Math.floor(10000 + Math.random() * 90000); // Random 5-digit
                vegetableData.push({
                    type: veg.type,
                    price: `₹${price}/kg`,
                    farmer: farmer,
                    contact: `+91 ${contactNum} XXXXX`,
                    district: district
                });
            }
        });
    });

    return vegetableData;
}

const vegetableData = generateVegetableData();

// Vegetable Filtering and Display
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const vegetableButtons = document.querySelectorAll('.vegetable-btn');
    const selectedDistrict = localStorage.getItem('selectedDistrict') || 'Ernakulam'; // Default

    function displayProducts(vegetableType) {
        productList.innerHTML = ''; // Clear current products
        const filteredData = vegetableData.filter(item => 
            item.type === vegetableType && item.district === selectedDistrict
        );

        filteredData.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="images/${item.type.toLowerCase()}.jpg" alt="${item.type}">
                <h3>${item.type}</h3>
                <p>Price: ${item.price}</p>
                <p>Farmer: ${item.farmer}</p>
                <p>Contact: ${item.contact}</p>
                <button class="order-btn">Order</button>
            `;
            productList.appendChild(productDiv);
        });

        // Add order button functionality
        document.querySelectorAll('.order-btn').forEach(button => {
            button.addEventListener('click', function() {
                const contact = this.previousElementSibling.textContent;
                alert('Contact the farmer directly: ' + contact);
            });
        });
    }

    vegetableButtons.forEach(button => {
        button.addEventListener('click', () => {
            const vegetableType = button.getAttribute('data-vegetable');
            displayProducts(vegetableType);
        });
    });

    // Auto-fill vegetable name in upload_product.html
    if (document.getElementById('productForm')) {
        vegetableButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent form submission
                const vegetableType = button.getAttribute('data-vegetable');
                document.getElementById('vegetableName').value = vegetableType;
            });
        });
    }

    // Real-time price display with ₹ and /kg
    const priceInput = document.getElementById('pricePerKg');
    const priceDisplay = document.getElementById('priceDisplay');
    if (priceInput && priceDisplay) {
        priceInput.addEventListener('input', () => {
            const price = priceInput.value;
            priceDisplay.textContent = price ? `₹${price}/kg` : `₹0/kg`;
        });
    }

    // Enforce +91 prefix for contact number
    function enforcePhonePrefix(input) {
        const prefix = '+91';
        // Get the current value without the prefix
        let value = input.value.startsWith(prefix) ? input.value.slice(prefix.length) : input.value;
        // Remove any non-numeric characters from the number part
        value = value.replace(/[^0-9]/g, '');
        // Limit to 10 digits
        value = value.slice(0, 10);
        // Always set the value with the prefix
        input.value = prefix + value;
    }

    const contactInput = document.getElementById('contactNumber');
    if (contactInput) {
        // Set the initial value to +91
        contactInput.value = '+91';
        contactInput.addEventListener('input', () => enforcePhonePrefix(contactInput));

        // Prevent deleting the prefix
        contactInput.addEventListener('keydown', (e) => {
            const cursorPosition = contactInput.selectionStart;
            const value = contactInput.value;

            // Prevent backspace from deleting the prefix
            if (e.key === 'Backspace' && cursorPosition <= 3) {
                e.preventDefault();
            }

            // Prevent cursor from moving before the prefix
            if (cursorPosition <= 3 && (e.key === 'ArrowLeft' || e.key === 'Backspace')) {
                contactInput.setSelectionRange(3, 3);
            }
        });

        // Ensure cursor starts after the prefix
        contactInput.addEventListener('click', () => {
            if (contactInput.selectionStart < 3) {
                contactInput.setSelectionRange(3, 3);
            }
        });
    }

    // No default display on load
    // Removed: displayProducts('Tomato');
});
