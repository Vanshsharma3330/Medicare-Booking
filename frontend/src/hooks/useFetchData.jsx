import {useEffect, useState} from 'react'

const useFetchData = (url) => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)

            try {
                const token = localStorage.getItem('token');
                const res = await fetch(url, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
    
                const result = await res.json();
    
                if(!res.ok){
                    throw new Error(result.message || 'Failed to fetch data')
                }

                setData(result.data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err.message)
            }
        }
        fetchData()
    }, [url])

    return {
        data,
        loading,
        error,
    }
}

export default useFetchData
