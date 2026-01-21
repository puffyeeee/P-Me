// ============================================
// ランディングページ メインスクリプト
// ============================================

// ページ初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
});

// ============================================
// イベントリスナー
// ============================================
function initializeEventListeners() {
    // Enterボタン
    const enterBtn = document.getElementById('enterBtn');
    if (enterBtn) {
        enterBtn.addEventListener('click', handleEnterClick);
    }

    // スクロール検知
    window.addEventListener('scroll', handleScroll);

    // マウスムーブエフェクト
    document.addEventListener('mousemove', handleMouseMove);
}

// ============================================
// イベントハンドラ
// ============================================

/**
 * Enterボタンクリック処理
 */
function handleEnterClick() {
    const infoSection = document.getElementById('infoSection');
    
    if (infoSection) {
        // 情報セクションを表示
        infoSection.style.display = 'block';
        
        // スムーススクロール
        setTimeout(() => {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

/**
 * スクロール時の処理
 */
function handleScroll() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // パララックス効果（オプション）
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((el, index) => {
        const offset = window.scrollY * (0.3 + index * 0.1);
        el.style.transform = `translateY(${offset}px)`;
    });
}

/**
 * マウスムーブエフェクト（グラデーション背景を追従）
 */
function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const gradientBg = document.querySelector('.gradient-bg');
    
    if (gradientBg) {
        const percentX = (clientX / window.innerWidth) * 100;
        const percentY = (clientY / window.innerHeight) * 100;
        
        gradientBg.style.backgroundPosition = `${percentX}% ${percentY}%`;
    }
}

// ============================================
// アニメーション初期化
// ============================================

/**
 * アニメーション設定
 */
function initializeAnimations() {
    // Intersection Observer でビューポート内の要素をアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 監視対象を設定
    document.querySelectorAll('.title, .subtitle, .btn, .scroll-indicator').forEach((el) => {
        observer.observe(el);
    });
}

// ============================================
// ユーティリティ関数
// ============================================

/**
 * スムーススクロール
 * @param {string} targetId - ターゲット要素のID
 */
function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * テーマ切り替え（拡張用）
 */
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

/**
 * コンテンツ追加（ダイナミック）
 * @param {string} sectionId - セクションのID
 * @param {string} content - 追加するHTML
 */
function addContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.innerHTML += content;
    }
}

/**
 * ボタン無効化
 * @param {HTMLElement} button - ボタン要素
 * @param {number} duration - 無効化期間（ミリ秒）
 */
function disableButtonTemporarily(button, duration = 2000) {
    button.disabled = true;
    button.style.opacity = '0.5';
    
    setTimeout(() => {
        button.disabled = false;
        button.style.opacity = '1';
    }, duration);
}

// ============================================
// 拡張ポイント
// ============================================
// 以下に機能を追加できます：
// - API連携
// - データベース接続
// - アナリティクス
// - フォーム処理
// etc...
