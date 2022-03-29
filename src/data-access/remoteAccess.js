import DataNetwork from "../netwoork/k_api";
import axios from "axios";

const RemoteAccess = () => {
    const { api_rest } = DataNetwork()
    const getMovieSearch = async (input) => {
        try {
            localStorage.setItem('search', input)
            const { data } = await axios.get(api_rest + input);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    return {
        getMovieSearch,
    }
}
export default RemoteAccess;