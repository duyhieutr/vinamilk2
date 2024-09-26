var STT = [];
function addtask(){
    STT = document.querySelectorAll('.display div');// Cập nhật biến STT bằng cách lấy tất cả các phần tử div trong phần hiển thị (display) của trang web.
    let tentask = document.getElementById('tentask').value;// trường nhập liệu
    let mota = document.getElementById('mota').value;// truy cập phần tử có id
   // đc gọi khi người dùng muốn thêm 1 nhiệm vụ 
    let demo = document.createElement('div');//tạo phần tử mới
    demo.innerHTML = `<span>${STT.length + 1}</span>` +
                `<span>${tentask}</span>` +
                `<span>${mota}</span>`+
                `<button onclick="deletetask(this)">Delete</button>`+
                `<button onclick="edittask(this)">Edit</button>`;
    let display = document.getElementById('display');// thêm
    display.appendChild(demo);// cập nhật stt
    console.log(STT);
}
function deletetask(button){
    let temp = button.parentElement;//gán vào temp
    temp.remove();// xóa lưu trữ biến temp
    STT = document.querySelectorAll('.display div');// cập nhật bằng cách lấy div
    for(let i = 0;i<STT.length;i++){
      let temp1 = STT[i].querySelectorAll('span');// lấy span thứ i ( chứa thứ tự )
      temp1[0].innerHTML = i+1;// đặt phần tử i tăng thêm 1 ( cập nhật stt)
    }
}
const gallery = document.querySelector('.gallery');
function edittask(giatri){
    gallery.style.display = 'flex';// đặt gal thành flex
    let tentask_edit = document.getElementById('tentask_edit');// nhập thông tin sửa
    let mota_edit = document.getElementById('mota_edit');//
    let temp = giatri.parentElement;
    let task_old = temp.querySelector('span:nth-child(2)'); // chứa thông tin chỉnh
    let mota_old = temp.querySelector('span:nth-child(3)');
    tentask_edit.value = task_old.textContent;// gán thứ 2 và 3 để hiển thị nội dung cũ trong chỉnh sửa
    mota_edit.value = mota_old.textContent;
    const add_edit = document.getElementById('add_edit');
    add_edit.addEventListener('click',()=>{
        task_old.textContent = tentask_edit.value;
        mota_old.textContent = mota_edit.value;
        gallery.style.display = 'none';
    })
}
let close1 = document.getElementById('close');
close1.addEventListener('click',()=>{
    gallery.style.display = 'none';
});




