import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={ styles.footer }>
        <div className={ styles.wrapper }>            
        <div className={ styles.links }>
            <div className={ styles.linkBlock }>
                <p className={ styles.title }>О компании</p>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
            </div>
            <div className={ styles.linkBlock }>
                <p className={ styles.title }>Центр помощи</p>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
            </div>
            <div className={ styles.linkBlock }>
                <p className={ styles.title }>Как продать авто</p>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
            </div>
            <div className={ styles.linkBlock }>
                <p className={ styles.title }>Как купить авто</p>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
            </div>
            <div className={ styles.linkBlock }>
                <p className={ styles.title }>Блок для seo</p>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
                <Link className={ styles.link } to="#">Ссылка на страницу</Link>
            </div>
        </div>
        <div className={ styles.down }>
            <span className={ styles.copyright }>Copyright</span>
            <div className={ styles.icons }>
                <img className={ styles.icon } src="Component 1.svg" alt="Component 1" />
                <img className={ styles.icon } src="Component 2.svg" alt="Component 2" />
                <img className={ styles.icon } src="Component 3.svg" alt="Component 3" />
                <img className={ styles.icon } src="Component 4.svg" alt="Component 4" />
                <img className={ styles.icon } src="Component 5.svg" alt="Component 5" />
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
