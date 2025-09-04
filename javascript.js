document.addEventListener('DOMContentLoaded', () => {
    const loadingPage = document.getElementById('loading-page');
    const birthdayPage = document.getElementById('birthday-page');
    const giftsContainer = document.getElementById('gifts-container');
    const giftBox = document.getElementById('gift-box');
    const flowerCard = document.getElementById('flower-card');
    const messageCard = document.getElementById('message-card');
    const openCardButton = document.getElementById('open-card-button');
    const loadingProgress = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');
    const showBirthdayButton = document.getElementById('show-birthday-button');
    const birthdaySong = document.getElementById('birthday-song');
    const confettiContainer = document.querySelector('.confetti-container');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5; 
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            loadingText.textContent = "Love loaded!";
            showBirthdayButton.classList.remove('hidden');
        }
        loadingProgress.style.width = `${progress}%`;
        if (progress < 100) {
            loadingText.textContent = `Loading love... ${progress}%`;
        }
    }, 200);

    showBirthdayButton.addEventListener('click', () => {
        loadingPage.classList.add('hidden');
        birthdayPage.classList.remove('hidden');
        birthdaySong.play();
        createConfetti(); 
        // Khi bài hát kết thúc, hiển thị hộp quà
        birthdaySong.addEventListener('ended', () => {
            birthdayPage.classList.add('hidden');
            giftsContainer.classList.remove('hidden');
        });
    });

    // Xử lý sự kiện khi click vào hộp quà
    giftBox.addEventListener('click', () => {
        giftBox.classList.add('hidden');
        flowerCard.classList.remove('hidden');
    });

    // Xử lý sự kiện khi click vào nút 'Mở thiệp'
    openCardButton.addEventListener('click', () => {
        flowerCard.classList.add('hidden');
        messageCard.classList.remove('hidden');
    });

    function createConfetti() {
        // ... (giữ nguyên hàm tạo confetti của bạn)
        const colors = ["#ff69b4", "#ff8c00", "#87ceeb", "#32cd32", "#ffd700"];
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 8 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
    setInterval(createConfetti, 150);
});