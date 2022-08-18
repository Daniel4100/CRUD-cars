import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const useApiPost = (URL = '', object) => {
const [data, setData] = useState()



useEffect(() => {
axios.post(URL, object )
.then(res => setData(res.data))
.catch(err => console.log('error url no valida'))
}, [])

return data
}

export default useApiPost