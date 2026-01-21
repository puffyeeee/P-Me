'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Import the main.js script dynamically
    const script = document.createElement('script')
    script.src = '/workshop/main.js'
    script.type = 'module'
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <header className="top">
        <a className="brand" href="#top">P&Me</a>
      </header>

      <div id="scrollVeil" className="scrollVeil"></div>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__media reveal">
            <img className="hero__img" src="/workshop/images/hero.jpg" alt="Puffy" />
          </div>
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <p className="hero__eyebrow">P&Me</p>
            <h1 className="hero__title"><span className="hero__titleMain">Puffy</span></h1>
            <p className="hero__welcome" id="heroWelcome">おかえり。パーちゃん待ってたよ</p>
            <p className="hero__copy">やさしい世界の入口</p>

            <div className="hero__cta">
              <a className="btn" href="#about">Enter</a>
              <a className="btn btn--ghost" href="#moments">Moments</a>
            </div>
          </div>

          <a className="scrollHint" href="#about">
            <span className="scrollHint__line"></span>
            <span className="scrollHint__text">scroll</span>
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <div className="about__inner">
            <div className="about__text">
              <h2 className="about__title">About</h2>
              <p className="about__body">
                Puffyはやさしい心を持った、世界中で愛されるペット。
              </p>
            </div>
            <div className="about__img reveal">
              <img src="/workshop/images/about.jpg" alt="About Puffy" />
            </div>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="sound">
          <h2 className="sound__title">Sound</h2>
          <div className="sound__links">
            <a href="#" className="sound__link">Apple Music</a>
            <a href="#" className="sound__link">Spotify</a>
          </div>
        </section>

        {/* THINGS */}
        <section id="things" className="things">
          <h2 className="things__title">Things</h2>
          <div className="things__links">
            <a href="#" className="things__link">Shop</a>
            <a href="#" className="things__link">Lookbook</a>
            <a href="#wallpapers" className="things__link">Wallpapers</a>
          </div>
        </section>

        {/* MOMENTS */}
        <section id="moments" className="moments">
          <h2 className="moments__title">Moments</h2>
          <div className="moments__gallery">
            <div className="moments__item reveal">
              <img src="/workshop/images/moment1.jpg" alt="Moment 1" />
            </div>
          </div>
        </section>

        {/* FROM PUFFY */}
        <section id="from" className="from">
          <h2 className="from__title">From Puffy</h2>
          <p className="from__message">ありがとう。また明日。</p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__message">準備中</p>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer__links">
            <a href="#about">About</a>
            <a href="#sound">Sound</a>
            <a href="#things">Things</a>
            <a href="#moments">Moments</a>
          </div>
        </footer>
      </main>
    </>
  )
}
