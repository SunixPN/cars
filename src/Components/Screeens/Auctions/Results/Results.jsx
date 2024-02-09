import styles from "./Results.module.css"
import { auctions } from "../../../../data/Auctions"
import Element from "./Element/Element"

const Results = ({ buttonsState }) => {
	const writing = (auction, date) => {
		if (buttonsState.us === true) {
			if (auction.date === date && auction.country === "США") {
					return <Element key={ auction.id } auction={ auction } />
			}
		}
		else if (buttonsState.eu == true) {
			if (auction.date === date && auction.country === "Европа") {
					return <Element key={ auction.id } auction={ auction } />
			}
		}	
		else {
			if (auction.date === date) {
					return <Element key={ auction.id } auction={ auction } />
			}
		}
	}

  return (
    <div className={ styles.results }>
        <div className={ styles.box }>
            <p className={ styles.date }>01.08.2024</p>
            <div className={ styles.elems }>
            {
                auctions.map(auction => writing(auction, "01.08.2024"))
            }
            </div>
        </div>
        <div className={ styles.box }>
            <p className={ styles.date }>25.08.2024</p>
            <div className={ styles.elems }>
            {
                auctions.map(auction => writing(auction, "25.08.2024"))
            }
            </div>
        </div>
    </div>
  )
}

export default Results
