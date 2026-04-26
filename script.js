// โค้ดเดิมยังคงใช้ได้ดี แต่เราจะปรับชื่อตัวแปรให้ตรงกับ id ใหม่ใน html
// สเต็ปที่ 1: ดึงตัวละคร (Elements) บนหน้าเว็บมาเตรียมไว้
const realInput = document.getElementById('Image_uploaded'); // ปุ่มจริงที่ถูกซ่อน
const fakeButton = document.getElementById('file-control-btn'); // ปุ่มสวยๆ ที่คนเห็น

const imagePreview = document.getElementById('image-preview'); // พื้นที่แสดงภาพตัวอย่าง
const imageInfo = document.getElementById('image-info'); // พื้นที่แสดงข้อมูลไฟล์
const fileName = document.getElementById('file-name');
const filesize = document.getElementById('file-size');
const filetype = document.getElementById('file-type');



// สเต็ปที่ 2: เมื่อคนคลิกปุ่มสวยๆ ให้มันไป "แอบกด" ปุ่มจริงที่ซ่อนอยู่
fakeButton.addEventListener('click', function() {
    realInput.click(); // สั่งคลิกช่อง input ทันที!
});


// สเต็ปที่ 3 (ของแถม): ตรวจจับว่าผู้ใช้เลือกไฟล์เสร็จหรือยัง
realInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0]; // ดึงไฟล์แรกที่ผู้ใช้เลือกมา

    if (selectedFile) {
        
        const fileURL = URL.createObjectURL(selectedFile); // สร้าง URL ชั่วคราวสำหรับแสดงภาพ
        
        imagePreview.src = fileURL
        imagePreview.style.display = 'block'; // แสดงภาพตัวอย่าง

        fileName.textContent =selectedFile.name;
        filesize.textContent = (selectedFile.size / 1024).toFixed(2) + ' KB'; // แปลงขนาดเป็น KB
        filetype.textContent = selectedFile.type;   
        imageInfo.style.display = 'block'; // แสดงข้อมูลไฟล์

        fakeButton.textContent = 'เปลี่ยนไฟล์'; // เปลี่ยนข้อความบนปุ่มหลังจากเลือกไฟล์
    }});