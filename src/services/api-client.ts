import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'284e66a14b9c4dfd8976794acfdd4d11'
    }
})
