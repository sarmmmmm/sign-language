// โค้ดเดิมยังคงใช้ได้ดี แต่เราจะปรับชื่อตัวแปรให้ตรงกับ id ใหม่ใน html
const video = document.getElementById('webcam');
const cameraControlBtn = document.getElementById('camera-control-btn');
const loadingMessage = document.getElementById('loading-message');

cameraControlBtn.addEventListener('click', async () => {
    try {
        // ขออนุญาตเปิดกล้อง
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // เมื่อได้รับ stream ให้เอาไปแสดงใน <video>
        video.srcObject = stream;
        video.style.display = 'block'; // แสดงกล้อง
        loadingMessage.style.display = 'none'; // ซ่อนข้อความ Loading
        
        // ปรับแต่งปุ่มเมื่อกล้องทำงานแล้ว
        cameraControlBtn.innerText = "Camera Active";
        cameraControlBtn.style.background = "#34a853"; // เปลี่ยนปุ่มเป็นสีเขียว
    } catch (err) {
        // หากผู้ใช้ไม่อนุญาต หรือกล้องมีปัญหา
        alert("Please allow camera access to use this sign language translator!");
    }
});
