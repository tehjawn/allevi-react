import { useContext } from "react";
import AppContext from "../AppContext";

let PrinterData = () => {
    const { userData } = useContext(AppContext)

    return (
        <div>
            { JSON.stringify(userData) }
        </div>
    )
}

let Home = () => (
    <div>
        <h3>Home</h3>
        <PrinterData />
    </div>
)
export default Home;