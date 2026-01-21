/*
  P&Me | Puffy
  - 画像やリンクの差し替えがしやすいように、設定をここにまとめています。
*/

const CONFIG = {
  links: {
    // Sound
    appleMusic: "#", // 例: "https://music.apple.com/..."
    spotify: "#",    // 例: "https://open.spotify.com/..."
    youtube: "#",    // 例: "https://www.youtube.com/..."

    // Things (Shop)
    shop: "#",       // 例: "https://your-shop.com"

    // Social
    instagram: "#",  // 例: "https://www.instagram.com/xxxx"
    threads: "#",    // 例: "https://www.threads.net/@xxxx"
    x: "#",          // optional
    tiktok: "#"      // optional
  }
};

function qs(sel, parent = document){
  return parent.querySelector(sel);
}

function qsa(sel, parent = document){
  return Array.from(parent.querySelectorAll(sel));
}

function setYear(){
  const el = qs('#year');
  if (el) el.textContent = new Date().getFullYear();
}

function setupReveal(){
  const els = qsa('.reveal');

  // 段差ディレイ（同一セクション内で少しずつ遅らせる）
  const groups = new Map();
  els.forEach(el => {
    const section = el.closest('.section');
    const key = section ? (section.id || section.getAttribute('aria-label') || 'section') : 'root';
    const idx = groups.get(key) ?? 0;
    el.style.setProperty('--d', `${idx * 90}ms`);
    groups.set(key, idx + 1);
  });

  if (!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.10, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el => io.observe(el));
}

function smoothScrollTo(hash){
  const id = hash?.startsWith('#') ? hash : `#${hash}`;
  const el = qs(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupMomentsModal(){
  const modal = qs('#momentsModal');
  if (!modal) return;

  const img = qs('#momentsModalImg');
  const kicker = qs('#momentsModalKicker');
  const title = qs('#momentsModalTitle');
  const text = qs('#momentsModalText');

  const items = qsa('.galleryItem[data-moment]');
  if (!items.length) return;

  const prefersReduce = prefersReducedMotion();

  const PUFFY_STORIES = [
    {
      kicker: 'Moment 01',
      title: 'ただいまの光',
      text: 'ひなたの匂いがすると、パーちゃんは少しだけ安心する。'
    },
    {
      kicker: 'Moment 02',
      title: 'やさしい音のほうへ',
      text: '静かな場所で、心の音がふわっと整う。'
    },
    {
      kicker: 'Moment 03',
      title: '準備中のたからもの',
      text: '小さな“かわいい”を、ちゃんと大切に集めているところ。'
    },
    {
      kicker: 'Moment 04',
      title: 'ことばの手紙',
      text: 'うまく言えない日も、ここではだいじょうぶ。'
    },
    {
      kicker: 'Moment 05',
      title: 'そっと、届く',
      text: 'やさしい気持ちは、急がなくてもちゃんと届く。'
    },
    {
      kicker: 'Moment 06',
      title: 'きらっとした時間',
      text: '見つけた小さなきらめきは、あとで何度でも思い出せる。'
    },
    {
      kicker: 'Moment 07',
      title: '夜明け前の静けさ',
      text: '深呼吸すると、夜の光がすっとやわらぐ。'
    },
    {
      kicker: 'Moment 08',
      title: 'はじまりの金色',
      text: '朝日に混ざる金の粒が、今日の物語をはじめる。'
    }
  ];

  const DATA = items.map((a, idx) => {
    const im = qs('img', a);
    const overlayTitle = qs('.galleryItem__title', a)?.textContent?.trim() || `Moment ${String(idx+1).padStart(2,'0')}`;
    const overlaySub = qs('.galleryItem__sub', a)?.textContent?.trim() || '';
    const story = PUFFY_STORIES[idx] || {};

    return {
      src: im?.getAttribute('src') || '',
      alt: im?.getAttribute('alt') || overlayTitle,
      kicker: story.kicker || `Moment ${String(idx+1).padStart(2,'0')}`,
      title: story.title || overlayTitle,
      text: story.text || overlaySub || 'そっと、会いにきてくれてありがとう。'
    };
  });

  let index = 0;
  let lastScrollY = 0;

  const open = (i) => {
    index = (i + DATA.length) % DATA.length;
    const d = DATA[index];

    // save scroll position
    lastScrollY = window.scrollY;

    img.src = d.src;
    img.alt = d.alt;
    kicker.textContent = d.kicker;
    title.textContent = d.title;
    text.textContent = d.text;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('is-modal');

    // lock scroll
    document.body.style.top = `-${lastScrollY}px`;
    document.body.classList.add('is-scroll-locked');

    // focus close button for accessibility
    const closeBtn = qs('[data-modal-close]', modal);
    closeBtn?.focus?.();

    // subtle entrance
    if (!prefersReduce && window.gsap){
      gsap.fromTo(qs('.modal__panel', modal), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' });
      gsap.fromTo(img, { scale: 1.02, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.85, ease: 'power2.out' });
    }
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('is-modal');

    // unlock scroll
    document.body.classList.remove('is-scroll-locked');
    const y = parseInt((document.body.style.top || '0').replace('px',''), 10) || 0;
    document.body.style.top = '';
    window.scrollTo(0, -y);
  };

  const prev = () => open(index - 1);
  const next = () => open(index + 1);

  // click on gallery
  items.forEach((a) => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const i = parseInt(a.getAttribute('data-moment') || '0', 10);
      open(Number.isFinite(i) ? i : 0);
    });
  });

  // close handlers
  qsa('[data-modal-close]', modal).forEach(el => el.addEventListener('click', close));
  qs('[data-modal-prev]', modal)?.addEventListener('click', prev);
  qs('[data-modal-next]', modal)?.addEventListener('click', next);

  // keyboard
  window.addEventListener('keydown', (ev) => {
    if (!modal.classList.contains('is-open')) return;
    if (ev.key === 'Escape') close();
    if (ev.key === 'ArrowLeft') prev();
    if (ev.key === 'ArrowRight') next();
  });

  // simple swipe (touch)
  let sx = 0;
  let sy = 0;
  const panel = qs('.modal__panel', modal);
  panel?.addEventListener('touchstart', (ev) => {
    sx = ev.touches[0].clientX;
    sy = ev.touches[0].clientY;
  }, { passive: true });
  panel?.addEventListener('touchend', (ev) => {
    const dx = (ev.changedTouches[0].clientX - sx);
    const dy = (ev.changedTouches[0].clientY - sy);
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)){
      dx > 0 ? prev() : next();
    }
  }, { passive: true });
}

// Backward-compat: keep old name call site
function setupGalleryJumps(){
  setupMomentsModal();
}

function applyLinks(){
  // Generic placeholders (Sound/Things/SNS すべてここで解決)
  qsa('[data-placeholder-link]').forEach(a => {
    const key = a.getAttribute('data-link-key');
    if (!key) return;
    a.href = CONFIG.links[key] ?? '#';
    a.target = (a.href && a.href !== '#') ? '_blank' : '';
    a.rel = (a.target === '_blank') ? 'noopener noreferrer' : '';
  });
}

function toast(msg){
  const t = qs('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('is-show');
  window.clearTimeout(toast._timer);
  toast._timer = window.setTimeout(() => t.classList.remove('is-show'), 2400);
}

function setupContactForm(){
  const form = qs('#contactForm');
  if (!form) return;

  // 準備中モード：送信させない
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    toast('いまは準備中。もう少し待っててね。');
  });
}

function setupHashOnLoad(){
  if (location.hash){
    // allow layout paint first
    setTimeout(() => smoothScrollTo(location.hash), 60);
  }
}

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function splitToLines(el){
  // Skip if already processed
  if (!el || el.dataset.splitDone === '1') return null;
  if (el.children.length) return null; // safety: avoid splitting complex nodes

  const text = (el.textContent || '').trim();
  if (!text) return null;

  // Preserve original
  el.dataset.splitDone = '1';
  el.dataset.originalText = text;

  // Create a measurement wrapper to compute line breaks
  const words = text.split(/\s+/);
  const meas = document.createElement('span');
  meas.style.position = 'absolute';
  meas.style.visibility = 'hidden';
  meas.style.whiteSpace = 'pre-wrap';
  meas.style.font = getComputedStyle(el).font;
  meas.style.letterSpacing = getComputedStyle(el).letterSpacing;
  meas.style.width = `${el.clientWidth}px`;
  document.body.appendChild(meas);

  const lines = [];
  let line = '';
  for (const w of words){
    const test = line ? `${line} ${w}` : w;
    meas.textContent = test;
    // If it wraps, commit previous line
    if (meas.scrollHeight > parseFloat(getComputedStyle(meas).lineHeight) * 1.35 && line){
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  document.body.removeChild(meas);

  // Build DOM
  const wrapper = document.createElement('span');
  wrapper.className = 'splitLines';

  lines.forEach((ln) => {
    const outer = document.createElement('span');
    outer.className = 'splitLine';
    const inner = document.createElement('span');
    inner.className = 'splitLine__inner';
    inner.textContent = ln;
    outer.appendChild(inner);
    wrapper.appendChild(outer);
  });

  el.textContent = '';
  el.appendChild(wrapper);
  return qsa('.splitLine__inner', el);
}

function setupScrollVeil(){
  const veil = qs('#scrollVeil');
  if (!veil) return;
  if (prefersReducedMotion()) return;

  let ticking = false;
  let lastY = window.scrollY;
  let offTimer = null;

  function onScroll(){
    if (ticking) return;
    ticking = true;

    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      const dy = Math.abs(y - lastY);
      lastY = y;

      // スクロール中だけ薄くON（“画面がふわっと切り替わる”）
      if (dy > 2){
        veil.classList.add('is-on');
        window.clearTimeout(offTimer);
        offTimer = window.setTimeout(() => veil.classList.remove('is-on'), 160);
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupLenis(){
  if (prefersReducedMotion()) return null;
  if (!window.Lenis) return null;

  const lenis = new Lenis({
    // 上品だけど“しっかり”感じる
    duration: 1.25,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ScrollTriggerと同期
  if (window.ScrollTrigger){
    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value){
        if (arguments.length) lenis.scrollTo(value, { immediate: true });
        return lenis.scroll;
      },
      getBoundingClientRect(){
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    // 初期のズレ/ガタつき防止
    ScrollTrigger.refresh(true);
  }

  return lenis;
}

function setupCinematicScrollAnimations(){
  if (prefersReducedMotion()) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  // ensure layout is settled for line splitting
  // (fonts loaded / widths known)

  gsap.registerPlugin(ScrollTrigger);

  // Scroll settle micro-motion:
  // スクロール停止時に、表示中の要素が“最後に整う”（1px/ほんの少し）
  const settleTargets = qsa('.hero__content, .sectionHead, .split__content, .soundLinks, .linkActions, .footer__grid');
  let settleTimer = null;
  let settling = false;

  const doSettle = () => {
    if (settling) return;
    settling = true;

    // viewportに入っている要素だけ軽く整える
    const inView = settleTargets.filter(el => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight;
    });

    // ほんの少しだけ：yを -2px → 0 に戻す + opacityを1へ
    gsap.fromTo(inView,
      { y: -2, opacity: 0.985 },
      { y: 0, opacity: 1, duration: 0.42, ease: 'power2.out', clearProps: 'transform,opacity', onComplete: () => { settling = false; } }
    );
  };

  window.addEventListener('scroll', () => {
    if (prefersReducedMotion()) return;
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(doSettle, 120);
  }, { passive: true });

  // 1) Section transition veil: セクション単位で“ふわっ” + 一瞬の発光
  const veil = qs('#scrollVeil');
  const sections = qsa('.section');
  if (veil){
    const flash = () => {
      veil.classList.add('is-flash');
      // flash → settle
      window.setTimeout(() => veil.classList.remove('is-flash'), 180);
    };

    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 62%',
        end: 'top 45%',
        onEnter: () => {
          flash();
          gsap.to(veil, { autoAlpha: 0.55, duration: 0.55, ease: 'power2.out' });
        },
        onLeave: () => gsap.to(veil, { autoAlpha: 0.00, duration: 0.70, ease: 'power2.out' }),
        onEnterBack: () => {
          flash();
          gsap.to(veil, { autoAlpha: 0.55, duration: 0.55, ease: 'power2.out' });
        },
        onLeaveBack: () => gsap.to(veil, { autoAlpha: 0.00, duration: 0.70, ease: 'power2.out' })
      });
    });
  }

  // 2) Parallax: 写真・背景の速度差（上品だけど“しっかり”感じる）
  // Hero image
  const heroImg = qs('.hero__img');
  if (heroImg){
    gsap.to(heroImg, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8
      }
    });
  }

  // Media images (About/Things/From)
  qsa('.mediaCard img').forEach(img => {
    gsap.fromTo(img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.split') || img,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 0.9
        }
      }
    );
  });

  // Gallery images
  qsa('.galleryItem img').forEach(img => {
    gsap.fromTo(img,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 0.8
        }
      }
    );
  });

  // 3) Headline subtle tracking + line reveal (CSS line is already)
  qsa('.h').forEach(h => {
    gsap.fromTo(h,
      { letterSpacing: '0.12em', opacity: 0.72, y: 10 },
      {
        letterSpacing: '0.01em',
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: h,
          start: 'top 78%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // 3.5) Lead/Body line reveal
  // PCで“ガタつき”が出やすい（文字分割DOMの組み替え＋clip-path＋Lenis/ScrollTrigger同期）ため、
  // デスクトップは分割せず、軽いフェード＆トラッキングに切り替える。
  const isDesktop = window.matchMedia('(min-width: 961px)').matches;
  const textTargets = qsa('.lead, .body');

  if (isDesktop){
    gsap.fromTo(textTargets,
      { y: 10, opacity: 0, letterSpacing: '0.12em' },
      {
        y: 0,
        opacity: 1,
        letterSpacing: '0.04em',
        duration: 1.05,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '#top',
          start: 'top top'
        }
      }
    );
  } else {
    // モバイルは従来どおり“行分割”で上品に
    textTargets.forEach((el) => {
      const inners = splitToLines(el);
      if (!inners) return;

      gsap.fromTo(inners,
        {
          yPercent: 120,
          opacity: 0,
          filter: 'blur(6px)',
          letterSpacing: '0.18em'
        },
        {
          yPercent: 0,
          opacity: 1,
          filter: 'blur(0px)',
          letterSpacing: '0.02em',
          duration: 1.25,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }

  // hint / footerは軽め（分割しない）
  qsa('.hint, .footer__desc').forEach((el) => {
    gsap.fromTo(el,
      { y: 10, opacity: 0, letterSpacing: '0.12em' },
      {
        y: 0,
        opacity: 1,
        letterSpacing: '0.04em',
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
      }
    );
  });

  // 4) Image mask reveal (clip-path polygon): 斜めに“開く”
  const imageWrappers = [
    ...qsa('.mediaCard'),
    ...qsa('.galleryItem'),
    ...qsa('.hero__media')
  ];

  imageWrappers.forEach(w => {
    // “有機的”斜め：最初は右上が遅れて開く形
    const fromPoly = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
    const midPoly  = 'polygon(0 0, 85% 0, 100% 35%, 0 100%)';
    const toPoly   = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

    gsap.set(w, { clipPath: fromPoly });

    gsap.timeline({
      scrollTrigger: {
        trigger: w,
        start: 'top 82%',
        toggleActions: 'play none none reverse'
      }
    })
    .to(w, { clipPath: midPoly, duration: 0.85, ease: 'power2.out' })
    .to(w, { clipPath: toPoly, duration: 0.85, ease: 'power2.out' });
  });
}

setYear();
setupReveal();

// Hero welcome: first view only, subtle
(function setupHeroWelcome(){
  const el = qs('#heroWelcome');
  if (!el) return;
  if (prefersReducedMotion()) { el.classList.add('is-on'); return; }

  // 少しだけ間を置いて“ふわっ”と出す（高級感）
  requestAnimationFrame(() => {
    setTimeout(() => el.classList.add('is-on'), 520);
  });
})();
setupGalleryJumps();
applyLinks();
setupContactForm();
setupHashOnLoad();
setupScrollVeil();

// Smooth scroll (Lenis)
const __lenis = setupLenis();

// Wait for fonts/layout before splitting lines
if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(() => {
    setupCinematicScrollAnimations();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
} else {
  setTimeout(() => {
    setupCinematicScrollAnimations();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 60);
}
