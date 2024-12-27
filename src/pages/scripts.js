// TRC20 钱包地址列表
const walletAddresses = [
  "TKs7sxuJiSLZeLti9KBxk9C66Zfis9v6Se",
  "THE7EFNxLgNvG9hYnLQGU784NEJxBYcM6v",
  "TYBqgGMeKciYvcbRFbfZTVDXTxAQfCUJe2",
  "TAW5PGBRLwyEx1JiZdyNCtEwPpUyeezN6u",
  "TYx7jTeChGcfQSfQiiacvUCXcMgK91VCf4",
  "TMMmBPT6AXHrwV6QpgnxNyjoVTa5usss9E"
];

// 随机选择钱包地址
function getRandomWalletAddress() {
  const randomIndex = Math.floor(Math.random() * walletAddresses.length);
  return walletAddresses[randomIndex];
}

// 打开弹窗并展示账户信息
function openModal(account, price, duration) {
  // 显示弹窗
  const modal = document.getElementById("paymentModal");
  const title = document.getElementById("account-title");
  const description = document.getElementById("account-description");
  const walletAddress = document.getElementById("wallet-address");
  const qrCodeContainer = document.getElementById("qr-code");

  title.textContent = `购买账户：${account}`;
  description.textContent = `使用期限：${duration}个月 | 价格：${price} USDT`;
  walletAddress.textContent = getRandomWalletAddress();  // 显示随机钱包地址

  // 使用二维码库生成二维码
  const walletAddr = walletAddress.textContent;  // 获取钱包地址
  QRCode.toCanvas(qrCodeContainer, walletAddr, { width: 200, height: 200 }, function (error) {
    if (error) console.error(error);
    console.log("二维码生成成功");
  });

  modal.style.display = "block";
}

// 关闭弹窗
function closeModal() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "none";
}

// 复制地址
function copyAddress() {
  const walletAddress = document.getElementById("wallet-address").textContent;
  navigator.clipboard.writeText(walletAddress).then(() => {
    alert("地址已复制！");
  });
}

// 关闭弹窗时点击空白区域
window.onclick = function(event) {
  const modal = document.getElementById("paymentModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


