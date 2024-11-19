import { useReducer } from "react"
import outletsContext from "./outletsContext"
import outletsReducer from "./outletsReducer"
import outletData from "../../Data/Outlets.json"
import {
    GET_OUTLET
} from "../types"


const OutletsState = props => {
    const initialState = {
        outlet: outletData,
        loading: false
    }

    const [state, dispatch] = useReducer(outletsReducer, initialState)

    // Get Outlet

    return <outletsContext.Provider
        value ={{
            outlet: state.outlet,
            loading: state.loading
        }}
    >
        { props.children }
    </outletsContext.Provider>
}

export default OutletsState
