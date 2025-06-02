import { useEffect, useState } from 'react'

function UseCurrencyInfo(currency) {


    /*   
    
    useEffect a callback diya 
    fetch a  api call dilam
    tar pore then() deon jai
    api thika ki aise
    response
    so .. then((res)
    res.json .. mane response re json a convert koibar jonno
    
    // tar pore ai json data re ekkha hold o korte hoibo
    // tar jonno variable banai disi 
    
    // const [data, setData] = useState({})
    khane { } pass korsi jate loop problem jate na hoi
    
    */

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
            .then((res) => res.json)
            .then((res) => setData(res[currency]))



    }, [currency])

    console.log(data);
    return data
}

export default UseCurrencyInfo;