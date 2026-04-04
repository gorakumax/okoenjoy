window.addEventListener('DOMContentLoaded', () => {
    // data-include 属性を持っている要素をすべて探す
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
                
                
            });
    });
});
function toggleNav() {
    // メニュー本体、背景、そしてボタン自身に 'open' クラスを付与
    document.getElementById('side-nav').classList.toggle('open');
    document.getElementById('nav-overlay').classList.toggle('open');
    document.getElementById('menu-trigger').classList.toggle('open');
}
/* SNSシェアボタンを有効化する関数 */
function shareX() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  // 画面の真ん中に小さく表示させる設定
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=550,height=420,menubar=no,toolbar=no,scrollbars=yes');
}

function shareFB() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=550,height=450,menubar=no,toolbar=no,scrollbars=yes');
}
