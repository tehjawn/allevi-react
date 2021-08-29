import axios from "axios";
import { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext";

let getPrinterData = (token) => {
    return axios.post('https://us-central1-allevi-cloud-dev.cloudfunctions.net/printers', { token: token })
}

let PrinterData = () => {
    const { userData } = useContext(AppContext)
    let [printerData, setPrinterData] = useState([])

    useEffect(() => {
        getPrinterData(userData.token ?? '')
            .then(res => {
                console.log(res.data)
                setPrinterData(JSON.parse(res.data.printers))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                printerData.length > 0
                    ? <div>{
                        printerData.map(printer => 
                            <div>{printer.name}</div>    
                        )
                    }</div>
                    : <div>No printer data available!</div>
            }
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