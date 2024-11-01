// Các vị trí của các lá bèo
const lilyPads = [
    { top: "60px", left: "50px" },   // Pad 1
    { top: "150px", left: "180px" }, // Pad 2
    { top: "90px", left: "300px" }   // Pad 3
];

let currentPad = 0; // Vị trí ban đầu của ếch

// Hàm để làm con ếch nhảy qua các lá bèo
function jumpFrog() {
    // Tăng vị trí hiện tại để chuyển sang lá bèo tiếp theo
    currentPad = (currentPad + 1) % lilyPads.length;
    // Cập nhật vị trí của ếch
    const frog = document.getElementById("frog");
    frog.style.top = lilyPads[currentPad].top;
    frog.style.left = lilyPads[currentPad].left;
}
