
import axios from "axios";


export const getAllGallerys = async () => {

    try {
        const res = await axios.get('http://localhost:8081/api/v1/galery')
        return res.data
    } catch (error) {
        console.log(error)
    }

}


