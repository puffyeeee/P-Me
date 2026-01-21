'use client';

export default function Home() {
  return (
    <>
      <a className="brand" href="#top" aria-label="トップへ戻る">
        <span className="brand__text">P&Me</span>
      </a>

      <div className="grain" aria-hidden="true"></div>
      <div className="scrollVeil" id="scrollVeil" aria-hidden="true"></div>

      <main id="top">
        <section className="section hero" aria-label="トップセクション">
          <div className="hero__media reveal">
            <img src="/images/hero.jpg" alt="Puffyのメイン写真" className="hero__img" />
            <div className="hero__overlay" aria-hidden="true"></div>
          </div>

          <div className="hero__content reveal">
            <p className="hero__eyebrow">P&Me</p>
            <h1 className="hero__title">
              <span className="hero__titleMain">Puffy</span>
            </h1>
            <p className="hero__welcome" id="heroWelcome" aria-live="polite">おかえり。パーちゃん待ってたよ</p>
            <p className="hero__copy">やさしい世界の入口</p>
            <div className="hero__cta hero__cta--minimal" aria-label="ヒーロー導線">
              <a className="textLink" href="#about">Enter ↘</a>
              <a className="textLink" href="#moments">Moments ↘</a>
            </div>
          </div>

          <a className="scrollHint" href="#about" aria-label="下へスクロール">
            <span className="scrollHint__line" aria-hidden="true"></span>
            <span className="scrollHint__text">scroll</span>
          </a>
        </section>

        <section id="about" className="section" aria-label="About">
          <div className="container split">
            <div className="split__media reveal">
              <a className="mediaCard" href="#about" aria-label="Aboutセクション">
                <img src="/images/about.jpg" alt="Puffyの写真（About）" loading="lazy" />
                <div className="mediaCard__label">About</div>
              </a>
            </div>

            <div className="split__content reveal">
              <h2 className="h">About</h2>
              <p className="lead">ちょっぴりビビリだけど、毎日ぜんりょく元気いっぱい。</p>
              <p className="body">今日もパーちゃんパワーを届けるよ</p>

              <dl className="meta" aria-label="Puffyのこと">
                <div className="meta__row"><dt>呼び名</dt><dd>パーちゃん / Puffy</dd></div>
                <div className="meta__row"><dt>合言葉</dt><dd>「パーちゃん待ってたよ〜!!おかえり」</dd></div>
                <div className="meta__row"><dt>ひとこと</dt><dd>今日もパーちゃんパワーを届けるよ</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="sound" className="section" aria-label="Sound">
          <div className="container">
            <div className="soundLayout">
              <header className="sectionHead reveal">
                <h2 className="h">Sound</h2>
                <p className="lead">音楽（制作中）— 配信リンクをまとめる場所</p>
                <p className="body">Apple Music / Spotify など、Puffyの音が流れる場所をここに。</p>
              </header>

              <div className="soundLinks reveal" role="list" aria-label="配信リンク">
                <a className="soundLink" role="listitem" href="#" data-placeholder-link data-link-key="appleMusic" aria-label="Apple Musicへ">
                  <span className="soundLink__name">Apple Music</span>
                  <span className="soundLink__meta">listen ↗</span>
                </a>
                <a className="soundLink" role="listitem" href="#" data-placeholder-link data-link-key="spotify" aria-label="Spotifyへ">
                  <span className="soundLink__name">Spotify</span>
                  <span className="soundLink__meta">listen ↗</span>
                </a>
                <a className="soundLink" role="listitem" href="#" data-placeholder-link data-link-key="youtube" aria-label="YouTubeへ">
                  <span className="soundLink__name">YouTube</span>
                  <span className="soundLink__meta">watch ↗</span>
                </a>

                <p className="hint">※ リンク先は <code>public/config.js</code> で後から変更できます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="things" className="section" aria-label="Things">
          <div className="container split split--reverse">
            <div className="split__media reveal">
              <a className="mediaCard" href="#things" aria-label="Thingsセクション">
                <img src="/images/things.jpg" alt="グッズのイメージ写真" loading="lazy" />
                <div className="mediaCard__label">Things</div>
              </a>
            </div>

            <div className="split__content reveal">
              <h2 className="h">Things</h2>

              <div className="thingsGroup" aria-label="Physical">
                <p className="lead">Physical（準備中）</p>
                <p className="body">かぶりもの / お洋服。ゆっくり、ちゃんとかわいく準備しています。</p>
                <div className="linkActions" aria-label="Physicalリンク">
                  <a className="textLink" href="#" data-placeholder-link data-link-key="shop">Shop ↗</a>
                  <a className="textLink" href="#moments">Lookbook ↗</a>
                </div>
              </div>

              <div className="thingsGroup thingsGroup--digital" aria-label="Digital">
                <p className="lead">Digital（配布）</p>
                <p className="body">待ち受け（壁紙）を5枚。iPhone/Androidどちらでも使えます。</p>
                <div className="linkActions" aria-label="Digitalリンク">
                  <a className="textLink" href="#wallpapers">Wallpapers ↘</a>
                  <a className="textLink" href="#sound">Sound ↘</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wallpapers" className="section" aria-label="Wallpapers">
          <div className="container">
            <header className="sectionHead reveal">
              <h2 className="h">Wallpapers</h2>
              <p className="lead">待ち受け（配布）</p>
              <p className="body">下の画像を開いて保存してね。iPhone/AndroidどちらでもOK。</p>
            </header>

            <p className="creditLine reveal" aria-label="壁紙について">For iPhone / Android · 9:16 · Open to save</p>
            <div className="wallpaperGrid reveal" aria-label="壁紙ギャラリー">
              <a className="wallpaperCard" href="/images/wallpapers/wp-1.jpg" target="_blank" rel="noopener noreferrer" aria-label="壁紙1を開く">
                <img src="/images/wallpapers/wp-1.jpg" alt="Puffy 壁紙 1" loading="lazy" />
                <div className="wallpaperCard__meta">
                  <div className="wallpaperCard__title">Wallpaper 01</div>
                  <div className="wallpaperCard__sub">↗</div>
                </div>
              </a>
              <a className="wallpaperCard" href="/images/wallpapers/wp-2.jpg" target="_blank" rel="noopener noreferrer" aria-label="壁紙2を開く">
                <img src="/images/wallpapers/wp-2.jpg" alt="Puffy 壁紙 2" loading="lazy" />
                <div className="wallpaperCard__meta">
                  <div className="wallpaperCard__title">Wallpaper 02</div>
                  <div className="wallpaperCard__sub">↗</div>
                </div>
              </a>
              <a className="wallpaperCard" href="/images/wallpapers/wp-3.jpg" target="_blank" rel="noopener noreferrer" aria-label="壁紙3を開く">
                <img src="/images/wallpapers/wp-3.jpg" alt="Puffy 壁紙 3" loading="lazy" />
                <div className="wallpaperCard__meta">
                  <div className="wallpaperCard__title">Wallpaper 03</div>
                  <div className="wallpaperCard__sub">↗</div>
                </div>
              </a>
              <a className="wallpaperCard" href="/images/wallpapers/wp-4.svg" target="_blank" rel="noopener noreferrer" aria-label="壁紙4を開く">
                <img src="/images/wallpapers/wp-4.svg" alt="Puffy 壁紙 4" loading="lazy" />
                <div className="wallpaperCard__meta">
                  <div className="wallpaperCard__title">Wallpaper 04</div>
                  <div className="wallpaperCard__sub">↗</div>
                </div>
              </a>
              <a className="wallpaperCard" href="/images/wallpapers/wp-5.svg" target="_blank" rel="noopener noreferrer" aria-label="壁紙5を開く">
                <img src="/images/wallpapers/wp-5.svg" alt="Puffy 壁紙 5" loading="lazy" />
                <div className="wallpaperCard__meta">
                  <div className="wallpaperCard__title">Wallpaper 05</div>
                  <div className="wallpaperCard__sub">↗</div>
                </div>
              </a>
            </div>

            <p className="noteLine reveal" aria-label="保存のしかた">iPhone：長押しで保存 / Android：長押しでダウンロード</p>
          </div>
        </section>

        <section id="moments" className="section" aria-label="Moments">
          <div className="container">
            <header className="sectionHead reveal">
              <h2 className="h">Moments</h2>
              <p className="lead">思い出の写真</p>
            </header>

            <div className="gallery reveal" aria-label="フォトギャラリー">
              <a className="galleryItem" href="#moments" data-moment="0" aria-label="写真を開く（1/8）">
                <img src="/images/moments-1.jpg" alt="Puffyの写真1" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">About</div>
                  <div className="galleryItem__sub">ふわっと、はじめまして</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="1" aria-label="写真を開く（2/8）">
                <img src="/images/moments-2.jpg" alt="Puffyの写真2" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Sound</div>
                  <div className="galleryItem__sub">やさしい音の場所</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="2" aria-label="写真を開く（3/8）">
                <img src="/images/moments-3.jpg" alt="Puffyの写真3" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Things</div>
                  <div className="galleryItem__sub">すこしずつ準備中</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="3" aria-label="写真を開く（4/8）">
                <img src="/images/moments-4.jpg" alt="Puffyの写真4" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">From Puffy</div>
                  <div className="galleryItem__sub">ことばの手紙</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="4" aria-label="写真を開く（5/8）">
                <img src="/images/moments-5.jpg" alt="Puffyの写真5" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Contact</div>
                  <div className="galleryItem__sub">ひとこと送る</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="5" aria-label="写真を開く（6/8）">
                <img src="/images/moments-6.jpg" alt="Puffyの写真6" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Moments</div>
                  <div className="galleryItem__sub">きらっとした時間</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="6" aria-label="写真を開く（7/8）">
                <img src="/images/moments-7.svg" alt="Puffyの写真7" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Nocturne</div>
                  <div className="galleryItem__sub">夜更けのやさしい光</div>
                </div>
              </a>

              <a className="galleryItem" href="#moments" data-moment="7" aria-label="写真を開く（8/8）">
                <img src="/images/moments-8.svg" alt="Puffyの写真8" loading="lazy" />
                <div className="galleryItem__overlay">
                  <div className="galleryItem__title">Dawn</div>
                  <div className="galleryItem__sub">あさの空気をまとって</div>
                </div>
              </a>
            </div>

            <p className="hint reveal">※ 画像をクリックすると、指定セクションへスムーズに移動します（画像の上に文字表示）。</p>
          </div>
        </section>

        <section id="from" className="section" aria-label="From Puffy">
          <div className="container split">
            <div className="split__media reveal">
              <a className="mediaCard" href="#from" aria-label="From Puffyセクション">
                <img src="/images/from.jpg" alt="Puffyの写真（From Puffy）" loading="lazy" />
                <div className="mediaCard__label">From Puffy</div>
              </a>
            </div>

            <div className="split__content reveal">
              <h2 className="h">From Puffy</h2>
              <p className="lead">Puffyからのメッセージ</p>
              <div className="note">
                <p className="body">今日はね、風がいい匂い。きみの一日が、やさしく終わりますように。</p>
                <p className="body">むりしないで、ゆっくりでいいよ。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section" aria-label="Contact">
          <div className="container">
            <header className="sectionHead reveal">
              <h2 className="h">Contact</h2>
              <p className="lead">おたより窓口（準備中）</p>
            </header>

            <div className="note reveal" aria-label="おたよりについて">
              <p className="body">準備中。</p>
              <p className="body">（非公開で受け取る形で整えます）</p>
            </div>

            <form className="form reveal" id="contactForm" data-disabled="true" aria-disabled="true">
              <div className="form__row">
                <label className="field">
                  <span className="field__label">お名前</span>
                  <input className="field__input" name="name" type="text" autoComplete="name" placeholder="準備中" disabled />
                </label>
                <label className="field">
                  <span className="field__label">メールアドレス</span>
                  <input className="field__input" name="email" type="email" autoComplete="email" placeholder="準備中" disabled />
                </label>
              </div>

              <label className="field">
                <span className="field__label">メッセージ</span>
                <textarea className="field__input field__input--textarea" name="message" rows={6} placeholder="準備中" disabled></textarea>
              </label>

              <div className="form__actions">
                <button className="btn btn--primary" type="submit" disabled>準備中</button>
                <p className="form__note">※ Coming soon</p>
              </div>
            </form>

            <div className="toast" id="toast" role="status" aria-live="polite" aria-atomic="true"></div>
          </div>
        </section>

        <div className="modal" id="momentsModal" aria-hidden="true" role="dialog" aria-label="Moments viewer">
          <div className="modal__backdrop" data-modal-close aria-hidden="true"></div>
          <div className="modal__veil" aria-hidden="true"></div>
          <div className="modal__panel" role="document">
            <button className="modal__close" type="button" data-modal-close aria-label="閉じる">Close</button>
            <button className="modal__nav modal__nav--prev" type="button" data-modal-prev aria-label="前へ">Prev</button>
            <button className="modal__nav modal__nav--next" type="button" data-modal-next aria-label="次へ">Next</button>
            <figure className="modal__figure" aria-label="写真">
              <img className="modal__img" id="momentsModalImg" alt="" />
            </figure>

            <div className="modal__below" aria-label="キャプション">
              <div className="modal__kicker" id="momentsModalKicker">Moment</div>
              <div className="modal__title" id="momentsModalTitle">—</div>
              <div className="modal__text" id="momentsModalText">—</div>
            </div>
          </div>
        </div>

        <footer className="footer" aria-label="フッター">
          <div className="container footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">P&Me</div>
              <p className="footer__desc">Puffyとあなたの、やさしい場所。</p>
            </div>

            <nav className="footer__nav" aria-label="フッターナビ">
              <a href="#about">About</a>
              <a href="#sound">Sound</a>
              <a href="#things">Things</a>
              <a href="#wallpapers">Wallpapers</a>
              <a href="#moments">Moments</a>
              <a href="#from">From Puffy</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer__social" aria-label="SNSリンク">
              <a className="social" href="#" data-placeholder-link data-link-key="instagram" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a className="social" href="#" data-placeholder-link data-link-key="threads" aria-label="Threads"><i className="fa-brands fa-threads"></i></a>
              <a className="social" href="#" data-placeholder-link data-link-key="x" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
              <a className="social" href="#" data-placeholder-link data-link-key="tiktok" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>

          <div className="container footer__bottom">
            <small>© <span id="year"></span> P&Me. All rights reserved.</small>
          </div>
        </footer>
      </main>

      <style>{`
        :root{
          --bg1:#ffb6d5;
          --bg2:#b8a7ff;
          --bg3:#84d4ff;

          --paper: rgba(255,255,255,.92);
          --ink: #141420;
          --muted: rgba(20,20,32,.62);

          --shadow: 0 18px 60px rgba(10, 10, 20, .10);
          --shadow2: 0 10px 34px rgba(10, 10, 20, .10);

          --radius: 18px;
          --radius2: 22px;
          --max: 1120px;
          --ease: cubic-bezier(.2,.8,.2,1);

          --foil-amber: rgba(255, 219, 186, .34);
          --foil-lilac: rgba(191, 175, 255, .24);
          --foil-sky: rgba(138, 223, 255, .22);
        }

        *{box-sizing:border-box}
        a{color: inherit}
        a:visited{color: inherit}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          color: var(--ink);
          background:
            radial-gradient(520px 420px at 14% 16%, rgba(255,182,213,.14), rgba(255,255,255,0) 70%),
            radial-gradient(520px 420px at 32% 10%, rgba(255,241,194,.12), rgba(255,255,255,0) 72%),
            radial-gradient(540px 440px at 52% 18%, rgba(184,167,255,.11), rgba(255,255,255,0) 72%),
            radial-gradient(540px 440px at 74% 12%, rgba(132,212,255,.12), rgba(255,255,255,0) 72%),
            radial-gradient(520px 420px at 90% 20%, rgba(255,182,213,.10), rgba(255,255,255,0) 74%),
            radial-gradient(620px 520px at 18% 56%, rgba(132,212,255,.10), rgba(255,255,255,0) 74%),
            radial-gradient(620px 520px at 40% 64%, rgba(255,182,213,.10), rgba(255,255,255,0) 74%),
            radial-gradient(620px 520px at 62% 58%, rgba(255,241,194,.09), rgba(255,255,255,0) 76%),
            radial-gradient(620px 520px at 84% 66%, rgba(184,167,255,.09), rgba(255,255,255,0) 76%),
            radial-gradient(720px 620px at 28% 92%, rgba(255,182,213,.09), rgba(255,255,255,0) 76%),
            radial-gradient(720px 620px at 56% 88%, rgba(184,167,255,.09), rgba(255,255,255,0) 76%),
            radial-gradient(720px 620px at 86% 92%, rgba(132,212,255,.09), rgba(255,255,255,0) 76%),
            linear-gradient(180deg, rgba(255,255,255,.98), rgba(255,255,255,.98));
          background-attachment: fixed;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
          overflow-x:hidden;
        }

        img{max-width:100%; display:block}

        .brand{
          position:fixed;
          top:20px;
          left:20px;
          z-index:50;
          display:inline-flex;
          align-items:center;
          padding: 0;
          border-radius: 0;
          text-decoration:none;
          color: var(--ink);
          background: transparent;
          border: none;
          backdrop-filter: none;
          box-shadow: none;
          opacity: .82;
          transition: opacity .25s var(--ease);
        }
        .brand:hover{opacity:1}
        .brand__text{font-size:12px; letter-spacing:.24em; text-transform:uppercase}

        main{position:relative}

        main::before{
          content:"";
          position:fixed;
          inset:0;
          pointer-events:none;
          z-index:0;
          background:
            radial-gradient(1000px 820px at 12% 12%, rgba(255,182,213,.05), rgba(255,255,255,0) 72%),
            radial-gradient(1000px 820px at 52% 10%, rgba(255,241,194,.04), rgba(255,255,255,0) 74%),
            radial-gradient(1000px 820px at 92% 18%, rgba(184,167,255,.04), rgba(255,255,255,0) 74%),
            radial-gradient(1000px 820px at 18% 86%, rgba(132,212,255,.04), rgba(255,255,255,0) 74%),
            radial-gradient(1000px 820px at 80% 92%, rgba(255,182,213,.04), rgba(255,255,255,0) 76%);
          mix-blend-mode: soft-light;
          opacity: .70;
          animation: marbleDrift 32s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes marbleDrift{
          from{transform: translate3d(0,0,0) scale(1)}
          to{transform: translate3d(-16px, 12px, 0) scale(1.03)}
        }
        main > *{position:relative; z-index:1}

        .grain{
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 30;
          opacity: .18;
          mix-blend-mode: overlay;
          filter: contrast(120%) brightness(110%);
          background:
            repeating-linear-gradient(0deg, rgba(0,0,0,.06) 0px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 2px),
            radial-gradient(circle at 30% 40%, rgba(0,0,0,.05), rgba(0,0,0,0) 55%),
            radial-gradient(circle at 70% 60%, rgba(0,0,0,.04), rgba(0,0,0,0) 55%);
          animation: grainMove 9s steps(10) infinite;
        }
        @keyframes grainMove{
          0%{transform: translate3d(0,0,0)}
          10%{transform: translate3d(-2%, -1%, 0)}
          20%{transform: translate3d(-4%, 2%, 0)}
          30%{transform: translate3d(2%, -3%, 0)}
          40%{transform: translate3d(4%, 1%, 0)}
          50%{transform: translate3d(-3%, 3%, 0)}
          60%{transform: translate3d(1%, 4%, 0)}
          70%{transform: translate3d(3%, -2%, 0)}
          80%{transform: translate3d(-1%, -4%, 0)}
          90%{transform: translate3d(2%, 2%, 0)}
          100%{transform: translate3d(0,0,0)}
        }

        .scrollVeil{
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 40;
          opacity: 0;
          visibility: hidden;
          transition: opacity 900ms var(--ease), visibility 900ms var(--ease);
          background:
            radial-gradient(900px 700px at 30% 20%, rgba(255,182,213,.18), rgba(255,255,255,0) 62%),
            radial-gradient(900px 700px at 70% 22%, rgba(255,241,194,.14), rgba(255,255,255,0) 64%),
            radial-gradient(900px 700px at 60% 80%, rgba(132,212,255,.16), rgba(255,255,255,0) 64%),
            linear-gradient(180deg, rgba(255,255,255,.55), rgba(255,255,255,.55));
          mix-blend-mode: soft-light;
        }
        .scrollVeil.is-on{opacity: .55; visibility: visible}
        .scrollVeil.is-flash{
          opacity: .92;
          visibility: visible;
          transition-duration: 180ms;
          filter: blur(2px);
        }

        .section{
          position:relative;
          padding: clamp(110px, 11vw, 170px) 16px;
        }

        .container{
          width:min(var(--max), 100%);
          margin:0 auto;
        }

        .split__content{max-width: 520px}

        .hero{min-height:100svh; display:grid; align-items:center; padding: 84px 16px 64px;}
        .hero__media{
          position:absolute;
          inset:0;
          overflow:hidden;
        }
        .hero__img{
          width:100%;
          height:100%;
          object-fit:cover;
          transform: scale(1.08);
          filter: saturate(1.03) contrast(1.03);
          animation: kenburns 26s cubic-bezier(.2,.8,.2,1) infinite alternate;
          will-change: transform;
        }
        @keyframes kenburns{
          from{transform: scale(1.08) translate3d(0,0,0)}
          to{transform: scale(1.13) translate3d(-18px, 10px, 0)}
        }
        .hero__overlay{
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 600px at 15% 20%, rgba(255,182,213,.18), rgba(0,0,0,0) 62%),
            radial-gradient(900px 600px at 85% 22%, rgba(132,212,255,.14), rgba(0,0,0,0) 62%),
            linear-gradient(0deg, rgba(0,0,0,.62), rgba(0,0,0,.12) 62%, rgba(0,0,0,.42));
        }
        .hero__content{
          position:relative;
          width:min(var(--max), 100%);
          margin:0 auto;
          padding: clamp(28px, 6vw, 56px) 0;
          max-width: 920px;
        }
        .hero__eyebrow{
          margin:0 0 18px;
          font-size:11px;
          letter-spacing:.34em;
          text-transform:uppercase;
          opacity:.9;
          color: rgba(255,255,255,.88);
        }
        .hero__title{margin:0}
        .hero__titleMain{
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(54px, 9vw, 108px);
          line-height: .92;
          letter-spacing:.02em;
          color: #ffd1e6;
          text-shadow: 0 20px 80px rgba(0,0,0,.40);
        }
        .hero__welcome{
          margin: 0;
          display:inline-block;
          font-size: 14px;
          letter-spacing: .08em;
          color: rgba(255,255,255,.86);
          text-shadow: 0 18px 55px rgba(0,0,0,.28);
          opacity: 0;
          transform: translateY(6px);
          filter: blur(6px);
          transition: opacity 1.4s var(--ease), transform 1.6s var(--ease), filter 1.6s var(--ease);
        }
        .hero__welcome.is-on{
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
        .hero__copy{
          margin: 18px 0 0;
          font-size: 13px;
          color: rgba(255,255,255,.88);
          letter-spacing:.22em;
          text-transform: uppercase;
        }
        .hero__cta{display:flex; gap:18px; flex-wrap:wrap; margin-top:26px}
        .hero__cta--minimal .textLink{color: rgba(255,255,255,.92); border-bottom-color: rgba(255,255,255,.34)}
        .hero__cta--minimal .textLink:hover{border-bottom-color: rgba(255,255,255,.60)}

        .scrollHint{
          position:absolute;
          left:50%;
          bottom:18px;
          transform: translateX(-50%);
          text-decoration:none;
          color: rgba(255,255,255,.78);
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
          padding:10px 2px;
          border-radius:0;
          background: transparent;
          border:0;
        }
        .scrollHint__line{width:2px; height:28px; background:rgba(255,255,255,.65); border-radius:999px; animation: hint 1.6s var(--ease) infinite; transform-origin: top}
        .scrollHint__text{font-size:11px; letter-spacing:.22em; text-transform:uppercase}
        @keyframes hint{0%{transform:scaleY(.5); opacity:.45}50%{transform:scaleY(1); opacity:1}100%{transform:scaleY(.5); opacity:.45}}

        .h{
          font-size: clamp(34px, 4.6vw, 54px);
          margin: 0 0 18px;
          letter-spacing:.01em;
          color: var(--ink);
          position: relative;
        }
        .h::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-12px;
          height:1px;
          width: 0;
          background: rgba(20,20,32,.22);
          transform-origin: left;
          transition: width 1.4s var(--ease);
        }
        .reveal.is-visible .h::after{width: min(140px, 34vw)}
        .lead{margin:0 0 26px; color: var(--muted); font-size: 13px; letter-spacing:.10em}
        .body{margin:0 0 16px; color: rgba(16,16,24,.84); line-height: 2.15; font-size: 14px}

        .sectionHead{max-width: 680px}

        .split{
          display:grid;
          grid-template-columns: 1.1fr .9fr;
          gap: clamp(18px, 4vw, 44px);
          align-items:center;
        }
        .split--reverse{grid-template-columns: .9fr 1.1fr}
        .split--reverse .split__media{order:2}
        .split--reverse .split__content{order:1}

        .mediaCard{
          position:relative;
          display:block;
          border-radius: 0;
          overflow:hidden;
          box-shadow: var(--shadow2);
          border: none;
          transform: translateZ(0);
          text-decoration:none;
        }
        .mediaCard::after,
        .galleryItem::after{
          content:"";
          position:absolute;
          inset:-40%;
          background:
            linear-gradient(115deg, rgba(255,255,255,0) 40%, rgba(255,255,255,.28) 50%, rgba(255,255,255,0) 60%),
            linear-gradient(124deg, transparent 18%, var(--foil-amber) 44%, var(--foil-lilac) 52%, var(--foil-sky) 64%, transparent 82%);
          transform: translateX(-30%) rotate(6deg);
          opacity:.18;
          transition: opacity .45s var(--ease), transform 1.1s var(--ease);
          pointer-events:none;
          mix-blend-mode: soft-light;
        }
        .mediaCard:hover::after,
        .galleryItem:hover::after{
          opacity:.9;
          transform: translateX(30%) rotate(6deg);
        }
        .mediaCard img{width:100%; height:min(640px, 72vh); object-fit:cover; transition: transform .9s var(--ease), filter .9s var(--ease)}
        .mediaCard__label{
          position:absolute;
          left:18px;
          bottom:18px;
          padding: 10px 0 6px;
          font-size:11px;
          letter-spacing:.26em;
          text-transform:uppercase;
          border-radius: 0;
          background: transparent;
          border: 0;
          color: rgba(16,16,24,.86);
          border-bottom: 1px solid rgba(16,16,24,.18);
        }
        .mediaCard:hover img{transform: scale(1.035); filter:saturate(1.06) contrast(1.03)}

        .meta{margin:22px 0 0; padding:0; border-top: 1px solid rgba(16,16,24,.10)}
        .meta__row{display:flex; gap:16px; padding:14px 0; border-bottom: 1px solid rgba(16,16,24,.08)}
        .meta dt{width:90px; color: rgba(16,16,24,.52); letter-spacing:.10em; text-transform:uppercase; font-size: 12px}
        .meta dd{margin:0; color: rgba(16,16,24,.86); font-size: 14px; line-height: 2.0; letter-spacing:.02em}

        .soundLayout{display:grid; grid-template-columns: 1fr 1fr; gap: clamp(18px, 4vw, 64px); align-items:start}
        .soundLinks{display:grid; gap:12px; align-content:start}
        .soundLink{
          display:flex;
          justify-content:space-between;
          align-items:baseline;
          gap:16px;
          padding: 16px 0;
          text-decoration:none;
          color: var(--ink);
          border-bottom: 1px solid rgba(20,20,32,.10);
          transition: transform .25s var(--ease), opacity .25s var(--ease), border-color .25s var(--ease);
        }
        .soundLink:hover{transform: translateY(-1px); border-bottom-color: rgba(20,20,32,.20)}
        .soundLink__name{font-size: 12px; letter-spacing:.22em; text-transform:uppercase}
        .soundLink__meta{font-size:11px; letter-spacing:.22em; text-transform:uppercase; color: rgba(20,20,32,.52)}

        .linkActions{display:flex; gap:18px; flex-wrap:wrap; margin-top: 18px}
        .textLink{
          text-decoration:none;
          color: rgba(20,20,32,.86);
          letter-spacing:.26em;
          text-transform:uppercase;
          font-size:11px;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(20,20,32,.22);
          transition: border-color .25s var(--ease), transform .25s var(--ease), opacity .25s var(--ease);
        }
        .textLink:hover{border-color: rgba(20,20,32,.44); transform: translateY(-1px)}

        .thingsGroup{margin-top: 8px}
        .thingsGroup + .thingsGroup{margin-top: 26px}
        .thingsGroup .linkActions{margin-top: 14px}
        .thingsGroup--digital{padding-top: 22px; border-top: 1px solid rgba(16,16,24,.08)}
        .thingsGroup .lead{
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 12px;
          color: rgba(16,16,24,.62);
          margin-bottom: 18px;
        }

        .creditLine{
          margin: 10px 0 18px;
          font-size: 11px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(16,16,24,.56);
        }
        .noteLine{
          margin: 16px 0 0;
          font-size: 11px;
          letter-spacing: .14em;
          color: rgba(16,16,24,.54);
        }

        .wallpaperGrid{
          display:grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }
        .wallpaperCard{
          position:relative;
          display:block;
          text-decoration:none;
          color: inherit;
          overflow:hidden;
          border-radius: 0;
          box-shadow: var(--shadow2);
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(16,16,24,.08);
        }
        .wallpaperCard::before{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background: linear-gradient(0deg, rgba(0,0,0,.46), rgba(0,0,0,0) 55%);
          opacity: .82;
        }
        .wallpaperCard::after{
          content:"";
          position:absolute;
          inset:-8% 0;
          pointer-events:none;
          background: linear-gradient(118deg,
            transparent 16%,
            var(--foil-amber) 42%,
            var(--foil-lilac) 50%,
            var(--foil-sky) 62%,
            transparent 78%);
          mix-blend-mode: screen;
          opacity: .24;
          transform: translateX(-10%);
          transition: opacity .6s var(--ease), transform 1.2s var(--ease);
        }
        .wallpaperCard img{
          width:100%;
          height: 460px;
          object-fit: cover;
          display:block;
          transition: transform 1.25s var(--ease), filter 1.25s var(--ease);
          will-change: transform;
        }
        .wallpaperCard__meta{
          position:absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          display:flex;
          align-items:baseline;
          justify-content:space-between;
          gap: 12px;
          padding: 10px 0 6px;
          border-radius: 0;
          background: transparent;
          border: 0;
          backdrop-filter: none;
          border-bottom: 1px solid rgba(255,255,255,.32);
          color: rgba(255,255,255,.92);
        }
        .wallpaperCard__title{font-size: 11px; letter-spacing:.26em; text-transform: uppercase; color: rgba(255,255,255,.92)}
        .wallpaperCard__sub{font-size: 11px; letter-spacing:.18em; color: rgba(255,255,255,.78)}
        .wallpaperCard:hover img{transform: scale(1.035); filter:saturate(1.06) contrast(1.03) brightness(1.02)}
        .wallpaperCard:hover::after{opacity:.72; transform: translateX(8%)}

        .gallery{
          display:grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }
        .galleryItem{
          position:relative;
          display:block;
          border-radius: 0;
          overflow:hidden;
          border: none;
          box-shadow: var(--shadow2);
          text-decoration:none;
          transform: translateZ(0);
        }
        .galleryItem img{width:100%; height: 380px; object-fit:cover; transition: transform .9s var(--ease), filter .9s var(--ease)}
        .galleryItem__overlay{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          padding: 22px;
          background: linear-gradient(0deg, rgba(0,0,0,.56), rgba(0,0,0,0) 64%);
          opacity:0;
          transition: opacity .25s var(--ease);
        }
        .galleryItem__title{font-weight:700; letter-spacing:.14em; text-transform:uppercase; font-size: 12px; color: rgba(255,255,255,.92)}
        .galleryItem__sub{margin-top:8px; color: rgba(255,255,255,.78); font-size:12px; letter-spacing:.08em}
        .galleryItem:hover img{transform: scale(1.03); filter:saturate(1.06) contrast(1.03)}
        .galleryItem:hover .galleryItem__overlay{opacity:1}

        .form{
          border-radius: 0;
          padding: clamp(18px, 3vw, 26px);
          background: rgba(255,255,255,.90);
          border:1px solid rgba(16,16,24,.10);
          box-shadow: var(--shadow2);
        }
        .form__row{display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:12px}
        .field{display:grid; gap:8px}
        .field__label{font-size:12px; letter-spacing:.12em; text-transform:uppercase; color: rgba(16,16,24,.70)}
        form[aria-disabled="true"]{opacity:.78}
        form[aria-disabled="true"] .btn{cursor:not-allowed}

        .field__input{
          width:100%;
          padding: 12px 14px;
          border-radius: 0;
          border:1px solid rgba(16,16,24,.12);
          background: rgba(255,255,255,.98);
          color: rgba(16,16,24,.92);
          outline:none;
        }
        .field__input::placeholder{color: rgba(16,16,24,.42)}
        .field__input:focus{border-color: rgba(16,16,24,.28)}
        .field__input--textarea{resize: vertical; min-height: 150px}
        .form__actions{display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin-top:12px}
        .form__note{margin:0; color: rgba(16,16,24,.54); font-size:11px; letter-spacing:.18em; text-transform:uppercase; line-height:1.6}

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          padding: 12px 18px;
          border-radius: 999px;
          border:1px solid rgba(16,16,24,.14);
          text-decoration:none;
          cursor:pointer;
          font-weight:600;
          letter-spacing:.16em;
          text-transform:uppercase;
          font-size: 12px;
          transition: transform .25s var(--ease), background .25s var(--ease), border-color .25s var(--ease);
          user-select:none;
        }
        .btn--primary{background: rgba(16,16,24,.92); color: rgba(255,255,255,.98); border-color: rgba(16,16,24,.18)}
        .btn:hover{transform: translateY(-2px); border-color: rgba(255,255,255,.3)}
        .btn:active{transform: translateY(0px)}

        .hint{margin:16px 0 0; color: rgba(16,16,24,.58); font-size:12px; line-height:1.8}
        code{background: rgba(16,16,24,.06); padding: 2px 6px; border-radius: 8px; border:1px solid rgba(16,16,24,.08)}

        .note{
          border-radius: 0;
          padding: clamp(18px, 3vw, 26px);
          background: rgba(255,255,255,.88);
          border:1px solid rgba(16,16,24,.10);
          box-shadow: var(--shadow2);
        }

        .footer{padding: 66px 16px 28px; border-top:1px solid rgba(16,16,24,.10); background: rgba(255,255,255,.72)}
        .footer__grid{display:grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 18px; align-items:start}
        .footer__logo{font-weight:800; letter-spacing:.16em; text-transform:uppercase; font-size:12px; opacity:.9; color: var(--ink)}
        .footer__desc{margin:12px 0 0; color: rgba(16,16,24,.62); line-height:2.0; font-size: 13px; letter-spacing:.04em}
        .footer__nav{display:grid; gap:10px}
        .footer__nav a{color: rgba(16,16,24,.78); text-decoration:none; letter-spacing:.10em; text-transform:uppercase; font-size: 12px}
        .footer__nav a:hover{text-decoration:underline}
        .footer__social{display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end}
        .social{
          width:42px; height:42px;
          display:grid; place-items:center;
          border-radius: 999px;
          background: rgba(16,16,24,.06);
          border: 1px solid rgba(16,16,24,.10);
          color: rgba(16,16,24,.86);
          text-decoration:none;
          transition: transform .25s var(--ease), border-color .25s var(--ease);
        }
        .social:hover{transform: translateY(-2px); border-color: rgba(16,16,24,.22)}
        .footer__bottom{margin-top: 18px; padding-top: 14px; border-top:1px solid rgba(16,16,24,.10); display:flex; justify-content:space-between; align-items:center; color: rgba(16,16,24,.68)}

        .reveal{
          opacity:0;
          transform: translateY(10px);
          transition: opacity 1.05s var(--ease), transform 1.05s var(--ease);
          transition-delay: var(--d, 0ms);
        }
        .reveal.is-visible{opacity:1; transform: translateY(0)}

        .reveal img{
          opacity: 0;
          transform: scale(1.01);
          filter: saturate(1.02) contrast(1.02);
          transition:
            opacity 2.0s var(--ease),
            transform 2.6s var(--ease),
            filter 2.6s var(--ease);
          transition-delay: calc(var(--d, 0ms) + 220ms);
          will-change: opacity, transform;
        }
        .reveal.is-visible img{
          opacity: 1;
          transform: scale(1);
          filter: saturate(1) contrast(1);
        }

        .reveal .mediaCard::before,
        .reveal .galleryItem::before,
        .reveal .hero__media::before{
          content:"";
          position:absolute;
          inset:-2px;
          pointer-events:none;
          background:
            linear-gradient(180deg,
              rgba(255,255,255,.97) 0%,
              rgba(255,255,255,.82) 34%,
              rgba(255,255,255,.28) 76%,
              rgba(255,255,255,0) 100%);
          filter: blur(20px);
          opacity: 1;
          transition: opacity 3.1s var(--ease);
          transition-delay: calc(var(--d, 0ms) + 220ms);
          -webkit-mask-image: radial-gradient(120% 90% at 50% 40%, #000 52%, transparent 80%);
          mask-image: radial-gradient(120% 90% at 50% 40%, #000 52%, transparent 80%);
        }
        .reveal.is-visible .mediaCard::before,
        .reveal.is-visible .galleryItem::before,
        .reveal.is-visible .hero__media::before{
          opacity: 0;
        }

        html.is-modal{overflow:hidden}
        body.is-scroll-locked{position:fixed; left:0; right:0; width:100%}

        .modal{
          position: fixed;
          inset: 0;
          z-index: 60;
          pointer-events: none;
          opacity: 0;
          transition: opacity .35s var(--ease);
        }
        .modal.is-open{opacity: 1; pointer-events: auto}
        .modal__backdrop{
          position:absolute;
          inset:0;
          background: rgba(0,0,0,.62);
        }
        .modal__veil{
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 600px at 30% 25%, rgba(255,182,213,.10), rgba(0,0,0,0) 60%),
            radial-gradient(900px 600px at 75% 30%, rgba(184,167,255,.10), rgba(0,0,0,0) 62%),
            radial-gradient(900px 700px at 55% 70%, rgba(132,212,255,.10), rgba(0,0,0,0) 62%),
            linear-gradient(0deg, rgba(255,255,255,.10), rgba(0,0,0,0));
          mix-blend-mode: soft-light;
          opacity: .85;
          filter: blur(6px);
        }
        .modal__panel{
          position: absolute;
          inset: 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap: 16px;
          padding: clamp(14px, 3vw, 28px);
        }
        .modal__figure{
          width: min(980px, 100%);
          margin: 0;
          position: relative;
        }
        .modal__img{
          width:100%;
          height: min(74vh, 720px);
          object-fit: cover;
          display:block;
          border-radius: 0;
          box-shadow: 0 40px 120px rgba(0,0,0,.45);
          border: 1px solid rgba(255,255,255,.10);
        }
        .modal__below{
          width: min(980px, 100%);
          padding: 0 6px;
        }
        .modal__kicker{font-size:11px; letter-spacing:.26em; text-transform:uppercase; color: rgba(255,255,255,.72)}
        .modal__title{margin-top:10px; font-size:18px; letter-spacing:.08em; color: rgba(255,255,255,.92); font-weight: 600}
        .modal__text{margin-top:10px; font-size:13px; line-height:2.15; letter-spacing:.05em; color: rgba(255,255,255,.78); max-width: 62ch}

        .modal__close{
          position:absolute;
          top: 14px;
          right: 14px;
          padding: 10px 0;
          width: 88px;
          border-radius: 0;
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.86);
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
          text-align:right;
          cursor:pointer;
          border-bottom: 1px solid rgba(255,255,255,.22);
        }
        .modal__close:hover{color: rgba(255,255,255,.98); border-bottom-color: rgba(255,255,255,.40)}

        .modal__nav{
          position:absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 10px 0;
          width: 92px;
          border: 0;
          border-radius: 0;
          background: transparent;
          color: rgba(255,255,255,.80);
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
          cursor:pointer;
          border-bottom: 1px solid rgba(255,255,255,.20);
        }
        .modal__nav:hover{color: rgba(255,255,255,.96); border-bottom-color: rgba(255,255,255,.38)}
        .modal__nav--prev{left: 14px; text-align:left}
        .modal__nav--next{right: 14px; text-align:right}

        .toast{
          position: fixed;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          padding: 12px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,.58);
          border: 1px solid rgba(255,255,255,.14);
          backdrop-filter: blur(10px);
          color: rgba(255,255,255,.92);
          box-shadow: 0 18px 55px rgba(0,0,0,.22);
          opacity:0;
          pointer-events:none;
          transition: opacity .25s var(--ease), transform .25s var(--ease);
        }
        .toast.is-show{opacity:1; transform: translateX(-50%) translateY(-6px)}

        @media (max-width: 960px){
          .split{grid-template-columns: 1fr;}
          .split--reverse{grid-template-columns: 1fr}
          .split--reverse .split__media{order:0}
          .gallery{grid-template-columns: 1fr; gap: 18px}
          .galleryItem img{height: 320px}
          .wallpaperGrid{grid-template-columns: 1fr; gap: 18px}
          .wallpaperCard img{height: 380px}
          .footer__grid{grid-template-columns: 1fr;}
          .footer__social{justify-content:flex-start}
          .soundLayout{grid-template-columns: 1fr}
          .modal__img{height: min(68vh, 520px)}
          .modal__panel{justify-content:flex-start; padding-top: 60px}
          .modal__nav{display:none}
        }

        @media (prefers-reduced-motion: reduce){
          .hero__welcome{transition:none; opacity:1; transform:none; filter:none}
          *{scroll-behavior:auto !important}
          .reveal{transition:none}
          .reveal img{transition:none; filter:none; transform:none; opacity:1}
          .reveal .mediaCard::before,
          .reveal .galleryItem::before,
          .reveal .hero__media::before{transition:none; opacity:0}
          .scrollHint__line{animation:none}
          .hero__img{animation:none}
          .modal{transition:none}
          .modal__veil{filter:none}
          main::before{animation:none}
          .h::after{transition:none}
        }
      `}</style>

      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>
      <script dangerouslySetInnerHTML={{__html: `
        const CONFIG = {
          links: {
            appleMusic: "#",
            spotify: "#",
            youtube: "#",
            shop: "#",
            instagram: "#",
            threads: "#",
            x: "#",
            tiktok: "#"
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
          const groups = new Map();
          els.forEach(el => {
            const section = el.closest('.section');
            const key = section ? (section.id || section.getAttribute('aria-label') || 'section') : 'root';
            const idx = groups.get(key) ?? 0;
            el.style.setProperty('--d', \`\${idx * 90}ms\`);
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

        function setupMomentsModal(){
          const modal = qs('#momentsModal');
          if (!modal) return;

          const img = qs('#momentsModalImg');
          const kicker = qs('#momentsModalKicker');
          const title = qs('#momentsModalTitle');
          const text = qs('#momentsModalText');

          const items = qsa('.galleryItem[data-moment]');
          if (!items.length) return;

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
              text: '小さな"かわいい"を、ちゃんと大切に集めているところ。'
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
            const overlayTitle = qs('.galleryItem__title', a)?.textContent?.trim() || \`Moment \${String(idx+1).padStart(2,'0')}\`;
            const overlaySub = qs('.galleryItem__sub', a)?.textContent?.trim() || '';
            const story = PUFFY_STORIES[idx] || {};

            return {
              src: im?.getAttribute('src') || '',
              alt: im?.getAttribute('alt') || overlayTitle,
              kicker: story.kicker || \`Moment \${String(idx+1).padStart(2,'0')}\`,
              title: story.title || overlayTitle,
              text: story.text || overlaySub || 'そっと、会いにきてくれてありがとう。'
            };
          });

          let index = 0;
          let lastScrollY = 0;

          const open = (i) => {
            index = (i + DATA.length) % DATA.length;
            const d = DATA[index];
            lastScrollY = window.scrollY;
            img.src = d.src;
            img.alt = d.alt;
            kicker.textContent = d.kicker;
            title.textContent = d.title;
            text.textContent = d.text;
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.documentElement.classList.add('is-modal');
            document.body.style.top = \`-\${lastScrollY}px\`;
            document.body.classList.add('is-scroll-locked');
          };

          const close = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.documentElement.classList.remove('is-modal');
            document.body.classList.remove('is-scroll-locked');
            const y = parseInt((document.body.style.top || '0').replace('px',''), 10) || 0;
            document.body.style.top = '';
            window.scrollTo(0, -y);
          };

          const prev = () => open(index - 1);
          const next = () => open(index + 1);

          items.forEach((a) => {
            a.addEventListener('click', (ev) => {
              ev.preventDefault();
              const i = parseInt(a.getAttribute('data-moment') || '0', 10);
              open(Number.isFinite(i) ? i : 0);
            });
          });

          qsa('[data-modal-close]', modal).forEach(el => el.addEventListener('click', close));
          qs('[data-modal-prev]', modal)?.addEventListener('click', prev);
          qs('[data-modal-next]', modal)?.addEventListener('click', next);

          window.addEventListener('keydown', (ev) => {
            if (!modal.classList.contains('is-open')) return;
            if (ev.key === 'Escape') close();
            if (ev.key === 'ArrowLeft') prev();
            if (ev.key === 'ArrowRight') next();
          });
        }

        function applyLinks(){
          qsa('[data-placeholder-link]').forEach(a => {
            const key = a.getAttribute('data-link-key');
            if (!key) return;
            a.href = CONFIG.links[key] ?? '#';
            a.target = (a.href && a.href !== '#') ? '_blank' : '';
            a.rel = (a.target === '_blank') ? 'noopener noreferrer' : '';
          });
        }

        function setupScrollVeil(){
          const veil = qs('#scrollVeil');
          if (!veil) return;

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

        setYear();
        setupReveal();
        setupMomentsModal();
        applyLinks();
        setupScrollVeil();

        (function setupHeroWelcome(){
          const el = qs('#heroWelcome');
          if (!el) return;
          requestAnimationFrame(() => {
            setTimeout(() => el.classList.add('is-on'), 520);
          });
        })();
      `}}></script>
    </>
  );
}
