import OutletsState from "../Context/Outlets/OutletsState"

const Outlets = () => {

    const Frevo = {
        outletName      : "Frevo - Brazilian Churrascaria",
        outletImage     : "https://lh3.googleusercontent.com/p/AF1QipP1fTRFUKwzuFDyuX-PEUsNXgo0WBgzENglkflx=s680-w680-h510",
        timings         : "6:00PM - 11:00PM",
        menus           : [
                {
                    name: "Churrascaria Set Menu",
                    link: "https://www.fairmont.com/palm-dubai/pdfs/frevo-menu-3-june-2024/"
                },
                {
                    name: "Beverage Menu",
                    link: "https://www.fairmont.com/palm-dubai/pdfs/frevo-beverage-list/"
                }
        ],
        discounts: [
            {
                name: "Entertainer Voucher",
                discount: "Buy One Get One",
                applicable: "Three Dinners & Card Holder"
            }
        ],
        description     : "Frevo is an authentic Brazilian restaurant where meats are carved tableside in true southern Brazilian style. Exotic salads, a selection of prime meat skewers and classic cocktails like the world famous caipirinha are all featured on the churrascaria-style menu."
    }

    const renderMenus = Frevo.menus.map(e => {
        return  (<a href={e.link} target="_blank" rel="noreferrer" ><span className="button button-menu">{e.name}</span></a>)
    })

    return (
        <OutletsState>
            <div className="outlets">
                <div className="outlet-header">
                    <img src={ Frevo.outletImage } alt="Frevo Outlet Indoors" />
                    <h1>{ Frevo.outletName }</h1>
                </div>
                <div className="outlet-description">
                    <p> { Frevo.description } </p>
                </div>
                <div className="outlet-menus">
                { renderMenus } 
                </div>
                <div className="outlet-timings">
                    <h4>Operational Times</h4>
                    { Frevo.timings }
                </div>
            </div>
        </OutletsState>
    )
}

export default Outlets