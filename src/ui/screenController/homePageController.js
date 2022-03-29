import { useEffect, useState } from "react";
import CardComponent from "../components/cardMovieComponent";
import RemoteAccess from "../../data-access/remoteAccess";

const HomePageController = () => {
    const [input, setInput] = useState("home");
    const [ouput, setOuput] = useState([]);
    const { getMovieSearch } = RemoteAccess();

    useEffect(() => {
        submitSearch();
    }, [ouput.length === 0]);

    const handleOnChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const submitSearch = async () => {
        try {
            const data = await getMovieSearch(input);
            setOuput(data);
        } catch (error) {
            console.log(error);
        }
    };

    const movieView = ouput.map((date, i) => (
        (ouput.length !== 0 ? <CardComponent
            key={i}
            id={i}
            title={date.show.name}
            array={i}
            image={date.show.image.medium}
        />
            :
            <div>
            </div>)
    ));

    return {
        handleOnChange,
        submitSearch,
        movieView
    };
}
export default HomePageController;