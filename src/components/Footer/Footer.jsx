import {Link} from "react-router-dom";
import LOGO from '../../images/logo.svg'
import {ROUTES} from "../../utils/routes";

import styles from '../../styles/Footer.module.css'

const Footer = () =>{
	return(
		<section className={styles.footer}>

			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt={'logo'} />
				</Link>
			</div>
			<div className={styles.rights}>
				Developed by {""} <a href="https://vk.com/mark.ushka" target="_blank">Mark Valishin</a>
			</div>

			<div className={styles.socials}>

				<a href="https://vk.com/mark.ushka" target="_blank" rel="noreferrer">
					<svg className='icon' >
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} ></use>
					</svg>

				</a>

			</div>

		</section>
	)
}

export default Footer