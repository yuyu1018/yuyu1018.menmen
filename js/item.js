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