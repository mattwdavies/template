import styles from './styles.module.scss'
import NavBar from '@/components/NavBar/NavBar'
export default function Home() {
  return (
    <main >
      <NavBar />
      <p className={styles.boo}>
        BOOOOOOO
      </p>
    </main>
  )
} 
