let currentIndex = 1;
const totalPairs = 5; // 画像とテキストのペアの総数を指定します

function loadContent(index) {
    const imageElement = document.getElementById('image');
    const textElement = document.getElementById('text');

    // 画像とテキストを読み込む
    imageElement.src = `assets/画像${index}.jpeg`;

    // テキストを読み込む
    fetch(`assets/テキスト${index}.txt`)
        .then(response => response.text())
        .then(data => {
            textElement.textContent = data;
        })
        .catch(error => {
            textElement.textContent = "テキストが読み込めませんでした。";
            console.error('Error loading text:', error);
        });
}

// 最初のペアを表示
loadContent(currentIndex);

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalPairs) {
        currentIndex = 1; // 最後のペアまで到達したら最初に戻る
    }
    loadContent(currentIndex);
});