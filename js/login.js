// Lắng nghe sự kiện submit của form
function validation() {
    // event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy giá trị nhập vào từ người dùng
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    // Kiểm tra giá trị người dùng nhập vào
    if (username === "user" && password === "pass") {
        // Chuyển hướng sang trang khác
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

