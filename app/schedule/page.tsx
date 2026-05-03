import shell from '../page-shell.module.scss'
import styles from './schedule.module.scss'

const timelineItems = [
    {
        time: 'Pátek 5.6. - 12:00',
        title: 'Začátek akce',
        description: 'Otevření budovy, příchod účastníků, zapojení vlastních setupů a přihlášení ke školním PC.'
    },
    {
        time: 'Pátek 5.6. - odpoledne',
        title: 'Rezervace a hraní',
        description: 'Volné hraní, rezervace míst v LAN Party systému a společné aktivity.'
    },
    {
        time: 'Pátek 5.6. - večer',
        title: 'Grilování',
        description: 'Jídlo na grilování a pití je v ceně vstupného. Jídlo vždy vydává grillmaster.'
    },
    {
        time: 'Pátek 5.6. - noc',
        title: 'Noční hraní',
        description: 'Pokračování v hraní přes noc. Snižte prosím hlasitost během nočního klidu.'
    },
    {
        time: 'Sobota 6.6. - ráno',
        title: 'Pokračování',
        description: 'Ranní hraní a poslední šance si zahrát s kamarády.'
    },
    {
        time: 'Sobota 6.6. - 14:00',
        title: 'Konec akce',
        description: 'Ukončení akce, odpojení setupů a úklid prostoru. Po sobě si ukliďte.'
    },
]

export default function SchedulePage() {
    return (
        <div className={`${shell.page} ${shell.narrow}`}>
            <div className={shell.pageHeader}>
                <span className={shell.eyebrow}>Harmonogram</span>
                <h1 className={shell.title}>Orientační harmonogram</h1>
                <p className={shell.description}>
                    Akce probíhá od 5.6. 12:00 do 6.6. 14:00. Časy jsou orientační a mohou se měnit.
                </p>
            </div>

            <div className={styles.timeline}>
                {timelineItems.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                        <div className={styles.dot}/>
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
