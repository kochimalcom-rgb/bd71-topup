// BD71 Topup ওয়েবসাইটের জন্য JS ফাইল
console.log("BD71 Topup চালু আছে!");

// ইউজার ডাটা সেভ করার ফাংশন
function saveUserData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getUserData(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}
