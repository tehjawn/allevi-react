import axios from "axios";
import { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext";

let getPrinterData = (token) => {
    return axios.post('https://us-central1-allevi-cloud-dev.cloudfunctions.net/printers', { token: token })
}

let PrinterData = () => {
    const {
        userData,
        printerData,
        setPrinterData
    } = useContext(AppContext)

    useEffect(() => {
        getPrinterData(userData.token ?? '')
            .then(res => {
                console.log(res.data)
                setPrinterData(res.data.printers)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                printerData.length > 0
                    ? <>
                        <div>
                            Hello {userData.firstName} {userData.lastName}, these are your printers:
                        </div>{
                            printerData.map((printer, i) => (
                                <div key={i}>
                                    <p>{printer.name}</p>
                                    <p>serial: {printer.serialNumber}</p>
                                    <p>model: {printer.modelNumber}</p>
                                </div>
                            ))
                        }</>
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