var map = L.map('main_map').setView([4.653068, -74.092388], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    
}).addTo(map);

L.marker([4.639905, -74.087914]).addTo(map);
L.marker([4.657889, -74.079036]).addTo(map);
L.marker([4.667987, -74.096946]).addTo(map);