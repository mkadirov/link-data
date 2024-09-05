import axios from 'axios'

const baseURL = "http://104.248.155.201/api/springboot/getHomePrice"



const getHomePrice = async(formData) => {

    try {
        console.log(formData);
        
        const res = await axios.post(baseURL, formData);
        if(res.status == 200) {
            return {success: true, data: res.data}
        }else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

export {getHomePrice}