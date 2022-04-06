import axios from 'axios'
import { URL_BASE } from '../Constants/URL_BASE'


export const getLotos = (set_data) => {
    const url = `${URL_BASE}/loterias`

    axios.get(url)
        .then((resp) => {
                set_data(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })

}

export const getResults = (url_link, set_data) => {
    const url = `${URL_BASE}${url_link}`

    axios.get(url)
    .then((resp) => {
        set_data(resp.data)
    })
    .catch((error) => {
        window.alert(error.message)
    })
}

