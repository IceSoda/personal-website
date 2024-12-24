// 获取按钮和对话框
const wechatBtn = document.getElementById('wechat-btn');
const phoneBtn = document.getElementById('phone-btn');
const emailBtn = document.getElementById('email-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const contactInfo = document.getElementById('contact-info');

// 定义每个联系方式
const contactDetails = {
    wechat: "微信: Soda-neversettle",
    phone: "电话: +86 130 9570 6063",
    email: "邮箱: chaineversettle@foxmail.com"
};

// 点击按钮时弹出对应的联系方式
wechatBtn.onclick = () => {
    contactInfo.textContent = contactDetails.wechat;
    modal.style.display = 'flex';
};

phoneBtn.onclick = () => {
    contactInfo.textContent = contactDetails.phone;
    modal.style.display = 'flex';
};

emailBtn.onclick = () => {
    contactInfo.textContent = contactDetails.email;
    modal.style.display = 'flex';
};

// 点击关闭按钮关闭对话框
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// 点击模态框外部区域也可以关闭对话框
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
