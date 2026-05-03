const timelineItems = [
  { time: 'Patek 5.12. - 12:00', title: 'Prichod a setup', description: 'Otevreni budovy, prichod ucastniku, zapojeni vlastnich setupu a prihlaseni ke skolnim PC.' },
  { time: 'Patek 5.12. - odpoledne', title: 'Hrani a akce', description: 'Volne hrani, turnaje a spolecne aktivity. Muzete prijit/odejit kdykoliv (nahlaste uciteli).' },
  { time: 'Patek 5.12. - vecer', title: 'Grilovani', description: 'Jidlo na grilovani a piti v cene vstupneho. Presny cas bude upresnena miste.' },
  { time: 'Patek 5.12. - noc', title: 'Nocni hrani', description: 'Pokracovani v hrani pres noc. Snizte prosim hlasitost behem nocniho klidu.' },
  { time: 'Sobota 6.12. - rano', title: 'Pokracovani', description: 'Ranni hrani a posledni sance si zahrat s kamarady.' },
  { time: 'Sobota 6.12. - 14:00', title: 'Konec akce', description: 'Ukonceni akce, odpojeni setupu, uklid prostoru. Po sobe si uklidte!' },
]

export default function SchedulePage() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 60px)', paddingBottom: '80px', maxWidth: '800px' }}>
      <div className="page-header" style={{ paddingTop: 0, textAlign: 'left' }}>
        <span className="badge">Harmonogram</span>
        <h1 className="page-title" style={{ marginTop: '16px' }}>Orientacni harmonogram</h1>
        <p className="page-description" style={{ marginLeft: 0, textAlign: 'left' }}>
          Casovy prehled prubehu akce. Presne casy jsou orientacni a mohou se menit.
        </p>
      </div>

      <div className="timeline">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <p className="timeline-time">{item.time}</p>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
