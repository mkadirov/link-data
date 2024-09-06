import axios from 'axios'

const baseURL = "https://linkhomeapi.eu/springboot/api/getHomePrice"
// const baseURL = "https://linkhomeapi.eu/springboot/api/test"
const baseURLDjango = "https://linkhomeapi.eu/django/home/getPrice/"



const getHomePrice = async(formData) => {

    try {
        console.log(formData);
        
        const res = await axios.post(baseURL, formData, {
            headers: {
              'Content-Type': 'application/json'
            },
        });
        
        if(res.status == 200) {
            return {success: true, data: res.data}
        }else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

const getHomePriceDjango = async(formData) => {

    try {
        console.log(formData);
        
        // const res = await axios.get(baseURL, formData);
        const res = await axios.options(baseURL , formData, {
            headers: {
              'Content-Type': 'application/json'
            },
        });
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