import shell from '../page-shell.module.scss'
import styles from './schedule.module.scss'

const timelineItems = [
  { time: 'Pátek 5.12. - 12:00', title: 'Příchod a setup', description: 'Otevření budovy, příchod účastníků, zapojení vlastních setupů a přihlášení ke školním PC.' },
  { time: 'Pátek 5.12. - odpoledne', title: 'Hraní a akce', description: 'Volné hraní, turnaje a společné aktivity. Můžete přijít/odejít kdykoliv (nahlaste učiteli).' },
  { time: 'Pátek 5.12. - večer', title: 'Grilování', description: 'Jídlo na grilování a pití v ceně vstupného. Přesný čas bude upřesněn na místě.' },
  { time: 'Pátek 5.12. - noc', title: 'Noční hraní', description: 'Pokračování v hraní přes noc. Snižte prosím hlasitost během nočního klidu.' },
  { time: 'Sobota 6.12. - ráno', title: 'Pokračování', description: 'Ranní hraní a poslední šance si zahrát s kamarády.' },
  { time: 'Sobota 6.12. - 14:00', title: 'Konec akce', description: 'Ukončení akce, odpojení setupů, úklid prostoru. Po sobě si ukliďte!' },
]

export default function SchedulePage() {
  return (
    <div className={`${shell.page} ${shell.narrow}`}>
      <div className={shell.pageHeader}>
        <span className={shell.eyebrow}>Harmonogram</span>
        <h1 className={shell.title}>Orientační harmonogram</h1>
        <p className={shell.description}>
          Časový přehled průběhu akce. Přesné časy jsou orientační a mohou se měnit.
        </p>
      </div>

      <div className={styles.timeline}>
        {timelineItems.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.dot} />
            <div className={`${shell.card} ${styles.content}`}>
              <p className={styles.time}>{item.time}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
