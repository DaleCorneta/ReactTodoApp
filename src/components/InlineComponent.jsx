// const header = {color: "blue", fontSize: "140px"};
//Inline styling
// import '../css/style.css';
import styles from './InlineComponent.module.css';
export default function InlineComponent(){
    return <div>
        {/* <h1 style={header}>Inline component</h1> */}
        {/* css style sheets */}
        <h1 className={styles.header}>Inline component</h1>
    </div>
}