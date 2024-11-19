import Outlets from "./Outlets"

const Main = () => {

    return (
        <div className="main">
            {/* basic navigation on top for screen
                TODO: User Account options
            */}
            <div className="nav">
                <span>All About PMI</span>
    
            </div>

            {/* This is actual Section within Main */}
            <div className="main_content">
                <Outlets />
            </div>

        </div>
    )
}

export default Main