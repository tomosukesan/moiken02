// モバイル用ナビゲーションの開閉
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('globalNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); }
    });
  }

  // 開催までのカウントダウン（トップページのみ）
  var el = document.getElementById('countdown');
  if (el) {
    var event = new Date('2026-11-15T12:30:00+09:00');
    var diff = Math.ceil((event - new Date()) / 86400000);
    el.textContent = diff > 0 ? '開催まであと ' + diff + ' 日' : '開催中／開催終了';
  }
});
