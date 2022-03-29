import { useEffect, useState } from "react";
import RemoteAccess from "../../data-access/remoteAccess";
import ApiRest from '../../netwoork/k_api'

const MoviePageController = () => {
    const [ouput, setOuput] = useState([]);
    const { getMovieSearch } = RemoteAccess();
    const { search } = ApiRest();

    useEffect(() => {
        submitSearch()
    }, [ouput.length === 0]);

    const submitSearch = async () => {
        try {
            const data = await getMovieSearch(search);
            setOuput(data);
        } catch (error) {
            console.log(error);
        }
    };

    const submitGetSearch = (movie) => {
        localStorage.setItem('identificador', movie)
    };
    return {
        submitGetSearch,
        ouput,
    };
}
export default MoviePageController;