import axios from 'axios'

const instance = axios.create({
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        return config
    }
)