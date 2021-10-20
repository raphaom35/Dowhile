import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox/indes';
import { MessageList } from './components/MessageList/indes';
import { SendMessageFrom } from './components/SendMessageFrom/indes';
import { useAuth  } from './contexts/auth';
export function App() {
  const {user} = useAuth()
  return (
   <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
     <MessageList/>
      {!!user?<SendMessageFrom/>:<LoginBox/>}
   </main>
  )
}


