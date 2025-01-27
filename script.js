
document.getElementById('addToCart').addEventListener('click', function (event) {
    // Ngừng sự kiện lan truyền lên các phần tử cha
    event.stopPropagation();
    // Lấy phần tử hiển thị số lượng sản phẩm trong giỏ hàng
    var countElement = document.querySelector('.count_item_pr');

    // Chuyển giá trị trong giỏ hàng từ chuỗi sang số và tăng lên 1
    var currentCount = parseInt(countElement.textContent) || 0;
    countElement.textContent = currentCount + 1;
});

function handleOrder() {
    // Hiển thị thông báo alert
    alert('Đặt hành thành công');
    
    // Chuyển hướng sang trang index.html
    window.location.href = 'index.html';
  }