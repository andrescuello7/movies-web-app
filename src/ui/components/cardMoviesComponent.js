import "../../values/styles/card.css";

const CardMovie = ({ type, title, image, language, ended, description }) => {
    return (
        <div>
            <img className="imgCard" src={image? `${image}` : "https://png.pngtree.com/png-clipart/20190920/original/pngtree-movie-card-board-drink-illustration-png-image_4688111.jpg"} />
            <div className="text-center mx-2">
                <p className="titleCard"><b>{title ? title : "Titulo"}</b></p>
            </div>
            <div className="text-center mx-2">
                <div className="d-flex flex-column">
                    <b className="descriptionCard">Lenguaje: {language}</b>
                    <b className="descriptionCard">Genero: {type}</b>
                    <b className="descriptionCard">Fecha de estreno: {ended}</b>
                </div>
                <div>
                    <p className="titleCard"><b>Sinopsis</b></p>
                </div>
                <div>
                    <p className="descriptionCard">{description}</p>
                </div>
            </div>
        </div>
    );
}
export default CardMovie;