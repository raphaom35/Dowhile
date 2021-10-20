import styles from './styles.module.scss';
import {VscGithubInverted} from 'react-icons/vsc'
import { useContext, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth  } from '../../contexts/auth';



export function LoginBox(){

    const { signInUrl } =useAuth();
    //console.log(user)
    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagen</strong>
            <a href={signInUrl} className={styles.singInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com Github
            </a>
        </div>
    )
}