import MoviePageController from "../screenController/moviePageController";
import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardMovieComponent";
import ApiRest from "../../netwoork/k_api";
import "../../values/styles/pages.css";

const MoviePage = () => {
    const { identify } = ApiRest();
    const { ouput } = MoviePageController();
    return (
        <div className="App-header w-100">
            <div className="w-100">
                <div className="navbarComponent">
                    <NavbarComponent navbar={false} />
                </div>
                <div className="cardMovieHome">
                    {ouput.length !== 0 ?
                        <CardComponent
                            title={ouput[identify].show.name}
                            image={ouput[identify].show.image.original}
                            language={ouput[identify].show.language}
                            type={ouput[identify].show.genres[0]}
                            ended={ouput[identify].show.ended}
                            description={ouput[identify].show.summary}
                        />
                        :
                        <div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default MoviePage;