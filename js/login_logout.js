// Lắng nghe sự kiện submit của form

// Login
function login() {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy giá trị nhập vào từ người dùng
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Kiểm tra giá trị người dùng nhập vào
    if (username === "user" && password === "pass") {
        // Chuyển hướng sang trang khác
        window.location.href = "dashboard.html";
        // alert("OK username or password");

    } else {
        alert("Invalid username or password");
    }
}


// Logout
const logoutBtn = document.querySelector('.log-out-icon');

logoutBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
