import styles from './transitions.module.scss'

export default function Template({children}: { children: React.ReactNode }) {
    return <div className={styles.route}>{children}</div>
}
