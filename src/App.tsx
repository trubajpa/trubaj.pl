const highlights = [
  ['02', 'sypialnie'], ['02', 'łazienki'], ['01', 'basen'], ['01', 'garaż'],
  ['AC', 'klimatyzacja'], ['01', 'balkon'], ['BBQ', 'wspólny taras dachowy'],
]

const apartmentPhotos = [
  ['/images/apartment/living-room-wide-02.jpg', 'Jasny salon z częścią wypoczynkową'],
  ['/images/apartment/kitchen-dining-01.jpg', 'Kuchnia otwarta na jadalnię'],
  ['/images/apartment/living-room-01.jpg', 'Przestronny salon apartamentu'],
  ['/images/apartment/kitchen-dining-02.jpg', 'Jadalnia i nowoczesna kuchnia'],
  ['/images/apartment/kitchen-01.jpg', 'W pełni wyposażona kuchnia'],
]

const bedroomPhotos = [
  ['/images/bedrooms/master-bedroom-01.jpg', 'Główna sypialnia'],
  ['/images/bedrooms/master-bedroom-02.jpg', 'Główna sypialnia z miejscem do przechowywania'],
  ['/images/bedrooms/bedroom-twin-01.jpg', 'Druga sypialnia z dwoma łóżkami'],
]

const bathroomPhotos = [
  ['/images/bathrooms/bathroom-01.jpg', 'Pierwsza łazienka'],
  ['/images/bathrooms/bathroom-02.jpg', 'Druga łazienka'],
]

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <header className="section-heading">
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </header>
}

function App() {
  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="La Mata — początek strony"><span className="brand-mark">LM</span><span>La Mata</span></a>
      <nav aria-label="Główna nawigacja"><a href="#apartament">Apartament</a><a href="#okolica">Okolica</a><a className="nav-cta" href="#dostepnosc">Dostępność</a></nav>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/images/hero/living-room-wide-01.jpg" alt="Salon apartamentu w La Mata otwarty na balkon" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-location">La Mata · Costa Blanca</p>
          <h1 id="hero-title">Apartament kilka kroków od Morza Śródziemnego</h1>
          <p className="hero-lead">Słońce, przestrzeń i śródziemnomorski rytm — miejsce stworzone do odpoczynku.</p>
          <a className="button button-light" href="#apartament">Zobacz apartament <span aria-hidden="true">↓</span></a>
        </div>
        <a className="scroll-cue" href="#atuty" aria-label="Przejdź do atutów apartamentu"><span /></a>
      </section>

      <section className="highlights" id="atuty" aria-label="Najważniejsze atuty"><div className="highlights-inner">
        {highlights.map(([value, label]) => <div className="highlight" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="section video-section">
        <div className="video-copy"><SectionHeading eyebrow="Poczuj klimat" title="Zajrzyj do środka" intro="Obejrzyj apartament i zobacz, jak wygląda codzienność blisko morza." /></div>
        <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/JK785tcnJbQ?rel=0" title="Film prezentujący apartament w La Mata" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      </section>

      <section className="section gallery-section" id="apartament">
        <SectionHeading eyebrow="Wnętrze" title="Apartament" intro="Jasne, wygodne wnętrze z otwartą strefą dzienną — idealne na leniwe poranki i wspólne wieczory." />
        <div className="photo-grid apartment-grid">{apartmentPhotos.map(([src, alt], index) => <figure className={`photo photo-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
      </section>

      <section className="section split-section" id="sypialnie">
        <SectionHeading eyebrow="Spokojny sen" title="Sypialnie" intro="Dwie niezależne sypialnie zapewniają komfort zarówno rodzinie, jak i grupie przyjaciół." />
        <div className="photo-grid bedroom-grid">{bedroomPhotos.map(([src, alt], index) => <figure className={`photo bedroom-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
      </section>

      <section className="section bathrooms-section" id="lazienki">
        <div className="bathrooms-copy"><SectionHeading eyebrow="Komfort" title="Dwie łazienki" intro="Wygoda bez kolejek — szczególnie cenna podczas wspólnych wakacji." /></div>
        <div className="bathroom-grid">{bathroomPhotos.map(([src, alt]) => <figure className="photo" key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
      </section>

      <section className="feature" id="balkon">
        <div className="feature-copy"><SectionHeading eyebrow="Śródziemnomorski poranek" title="Balkon i widok" intro="Kawa na świeżym powietrzu, błękit nieba i morze na horyzoncie." /></div>
        <figure className="feature-main photo"><img src="/images/balcony/balcony-seating-01.jpg" alt="Miejsce do wypoczynku na balkonie" loading="lazy" /></figure>
        <figure className="feature-small photo"><img src="/images/balcony/balcony-sea-view-01.jpg" alt="Widok z balkonu w stronę morza" loading="lazy" /></figure>
      </section>

      <section className="wide-feature" id="basen">
        <div className="wide-image photo"><img src="/images/pool/pool-01.jpg" alt="Basen dostępny dla gości apartamentu" loading="lazy" /></div>
        <div className="wide-copy"><SectionHeading eyebrow="Chwila ochłody" title="Basen" intro="Zaciszna przestrzeń do pływania, zabawy i odpoczynku w ciepłe dni Costa Blanca." /></div>
      </section>

      <section className="wide-feature wide-feature-reverse" id="taras">
        <div className="wide-image photo"><img src="/images/rooftop/rooftop-bbq-01.jpg" alt="Wspólny taras dachowy z grillem" loading="lazy" /></div>
        <div className="wide-copy"><SectionHeading eyebrow="Wieczory pod niebem" title="Taras dachowy" intro="Wspólny taras z grillem zaprasza na długie kolacje i zachody słońca." /></div>
      </section>

      <section className="surroundings" id="okolica">
        <img src="/images/surroundings/sea-view-01.jpg" alt="Morze Śródziemne w okolicy La Mata" loading="lazy" /><div className="surroundings-shade" />
        <div className="surroundings-copy"><p className="eyebrow">La Mata i okolica</p><h2>Morze na wyciągnięcie ręki</h2><p>Spacer na plażę, poranna kąpiel i nadmorska promenada — tutaj wakacje zaczynają się tuż za progiem.</p></div>
      </section>

      <section className="availability" id="dostepnosc">
        <div><p className="eyebrow">Twój czas nad morzem</p><h2>Sprawdź dostępność</h2><p>Planujesz pobyt w La Mata? Skontaktuj się, aby zapytać o wolne terminy i szczegóły apartamentu.</p></div>
        <a className="button button-dark" href="mailto:paweltrubaj@gmail.com">Zapytaj o termin <span aria-hidden="true">↗</span></a>
      </section>
    </main>

    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">LM</span><span>La Mata</span></a><p>Wypoczynek nad Morzem Śródziemnym</p><a href="#top">Wróć na górę ↑</a></footer>
  </>
}

export default App
