import styles from './../css/Main.module.css'
import Advertaisement from './Advertaisement';
import SubContent from './SubContent';

const Main = () => {
    return <div className={styles.Main}>
        <SubContent/>
        <SubContent/>
        <SubContent/>
        <Advertaisement/>
    </div>
        
}

export default Main;