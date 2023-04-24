const sliders = document.querySelectorAll('.slider-wrapper');

sliders.forEach(slider => {
  const images = slider.querySelectorAll('.image-slider img');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  const imageName = slider.querySelector('.image-name');
  const imagePrice = slider.querySelector('.image-price');

  let currentIndex = 0;

  function showImage() {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        images[i].classList.add('active');
        imageName.textContent = images[i].alt;
        imagePrice.textContent = images[i].dataset.price + '円';
      } else {
        images[i].classList.remove('active');
      }
    }
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage();
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage();
  }

  setInterval(nextImage, 6000);

  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);
});



const links = document.querySelectorAll('#g_navi ul li a');
for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // リンクによるページ遷移をキャンセル
    const url = link.getAttribute('href'); // リンク先 URL を読み込む
    window.location.href = url; // リンク先ページに遷移する
  });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // ページ遷移をキャンセル
    const keyword = document.querySelector('#search-keyword').value; // キーワードを取得
    const category = document.querySelector('#search-category').value; // カテゴリを取得
    console.log(`キーワード：${keyword}、カテゴリ：${category}`); // デバッグ用にログを出力
    // ここで、取得したキーワードやカテゴリを使って検索を行う処理を実装する
  });


  // 年、月ボタン
  const yearSelect = document.getElementById("year-select");
    const monthSelect = document.getElementById("month-select");
    const newsContainer = document.getElementById("news-container");

    // フィルタリングを実行する関数
    function filterNews() {
      const year = yearSelect.value;
      const month = monthSelect.value;

      const newsList = document.getElementsByClassName("news");
      for (let i = 0; i < newsList.length; i++) {
        const date = newsList[i].getAttribute("data-date");
        const [yearStr, monthStr] = date.split("-");
        const yearMatched = year === "" || yearStr === year;
        const monthMatched = month === "" || monthStr === month;
        if (yearMatched && monthMatched) {
          newsList[i].style.display = "block";
        } else {
          newsList[i].style.display = "none";
        }
      }
    }

    // selectタグの変更時にフィルタリングを実行
    yearSelect.addEventListener("change", filterNews);
    monthSelect.addEventListener("change", filterNews);

    // 初期表示のためにフィルタリングを実行
    filterNews();


    // タイマー
    const minutesSelect = document.getElementById("minutes");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const countdownDiv = document.getElementById("countdown");
    
    let countdownInterval;
    let remainingSeconds = 0;
    
    function startCountdown() {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    
      remainingSeconds = remainingSeconds || parseInt(minutesSelect.value) * 60;
    
      countdownInterval = setInterval(() => {
        remainingSeconds--;
    
        if (remainingSeconds <= 0) {
          clearInterval(countdownInterval);
          countdownDiv.innerHTML = "完成！";
          return;
        }
    
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
    
        countdownDiv.innerHTML = `0${minutes}分${seconds}秒`;
      }, 1000);
    }
    
    function stopCountdown() {
      clearInterval(countdownInterval);
    }
    
    function resetCountdown() {
      clearInterval(countdownInterval);
      remainingSeconds = 0;
      countdownDiv.innerHTML = "00分00秒";
    }
    
    resetCountdown();
    
    startButton.addEventListener("click", startCountdown);
    stopButton.addEventListener("click", stopCountdown);
    resetButton.addEventListener("click", resetCountdown);