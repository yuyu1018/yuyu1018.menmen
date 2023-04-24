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


var closeButtons = document.getElementsByClassName("close-button");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    // 閉じるボタンをクリックしたフォームの親要素を非表示にする
    this.parentNode.parentNode.style.display = "none";
  });
}

// ボタンをクリックしたときの処理
var reviewButtons = document.getElementsByClassName("review-button");
for (var i = 0; i < reviewButtons.length; i++) {
  reviewButtons[i].addEventListener("click", function() {
    // クリックされたボタンの次の要素にあるフォームを表示する
    this.nextElementSibling.style.display = "block";
  });
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // ページ遷移をキャンセル
  const keyword = document.querySelector('#search-keyword').value; // キーワードを取得
  const category = document.querySelector('#search-category').value; // カテゴリを取得
  console.log(`キーワード：${keyword}、カテゴリ：${category}`); // デバッグ用にログを出力
  // ここで、取得したキーワードやカテゴリを使って検索を行う処理を実装する
});