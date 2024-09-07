import axios from 'axios'

const baseURL = "https://linkhomeapi.eu/springboot/api/getHomePrice"
// const baseURL = "https://linkhomeapi.eu/springboot/api/price"
const baseURL2 = "https://linkhomeapi.eu/springboot/api/postTest/"
const baseURLDjango = "https://linkhomeapi.eu/django/home/getPrice/"





const getHomePrice = async(homeDto) => {

    
    try {
        console.log(homeDto);
        
        const res = await axios.post(baseURL, homeDto, {
            headers: {
                    'Content-Type': 'application/json'
                }
        });
        // const res = await axios.post(baseURL2 + 'test');
        
        if(res.status == 200) {
            return {success: true, data: res.data}
        }else {
            return {success: false}
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return { success: false, error: error.message };
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