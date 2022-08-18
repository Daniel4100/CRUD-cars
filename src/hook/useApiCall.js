import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const useApiCall = (URL = '') => {
const [data, setData] = useState()

useEffect(() => {
axios.get(URL)
.then(res => setData(res.data))
.catch(err => console.log('error url no valida'))
}, [])

return data
}

export default useApiCall