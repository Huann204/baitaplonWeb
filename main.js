window.addEventListener("load", function () {
  let mainContent = document.getElementsByClassName("container")[0]; // Lấy phần tử đầu tiên của class
  let mobileAlert = document.getElementById("mobile-alert");

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      // Kích thước dành cho mobile
      mainContent.style.display = "none";
      mobileAlert.style.display = "block";
    } else {
      mainContent.style.display = "block";
      mobileAlert.style.display = "none";
    }
  }

  // Kiểm tra ngay khi tải trang
  checkScreenSize();

  // Cập nhật khi thay đổi kích thước màn hình
  window.addEventListener("resize", checkScreenSize);
});
