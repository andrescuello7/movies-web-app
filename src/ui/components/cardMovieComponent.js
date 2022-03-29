import { Link } from "react-router-dom";
import Controller from "../screenController/moviePageController"
import "../../values/styles/card.css";

const CardComponent = ({ title, image, array }) => {
    const { submitGetSearch } = Controller();
    function searchMovieResponse() {
        submitGetSearch(array);
    }
    return (
        <div>
            <Link to={"/movie"} onClick={searchMovieResponse}>
                <img className="imgMovieCard" src={image ? `${image}` : "https://png.pngtree.com/png-clipart/20190920/original/pngtree-movie-card-board-drink-illustration-png-image_4688111.jpg"} />
            </Link>
            <div className="text-end mx-2">
                <p className="titleCardMovie"><b>{title ? title : "Titulo"}</b></p>
            </div>
        </div>
    );
}
export default CardComponent;