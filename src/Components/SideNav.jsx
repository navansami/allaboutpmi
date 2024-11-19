const SideNav = () => {

    return (
        <div className="sidenav">
            <div className="branding">
                <h3>Fairmont The Palm</h3>
            </div>
            <div className="sideMenuItems">
                <div>
                <i class="fas fa-person-booth"></i>
                    <span>Rooms</span>
                </div>
                <div>
                <i class="fas fa-utensils"></i>
                    <span>Food & Beverage</span>
                    <ul className="submenu">
                        <li className="submenu-item"><a href="frevo">Frevo</a></li>
                        <li className="submenu-item"><a href="seagrill">Seagrill Bistro</a></li>
                        <li className="submenu-item"><a href="lmi">Little Miss India</a></li>
                        <li className="submenu-item"><a href="ba">BA Bold Asian</a></li>
                        <li className="submenu-item"><a href="flow">Flow Kitchen</a></li>
                    </ul>
                </div>
                <div>
                    <i class="fas fa-info"></i>
                    <span>Concierge</span>
                </div>
                <div>
                    <i class="fas fa-address-book"></i>
                    <span>Phonebook</span>
                </div>
            </div>
        </div>
    )
}

export default SideNav