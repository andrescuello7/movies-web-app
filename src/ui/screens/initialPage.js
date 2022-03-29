import InitialPageController from "../screenController/initialPageController";
import MoviePop from "../components/moviePopComponent";
import NavbarComponent from "../components/navbarComponent";

const InitialPage = () => {
    return (
        <div className="App-header w-100">
            <div className="w-100">
                <div className="navbarComponent">
                    <NavbarComponent type={true} navbar={true} />
                </div>
                <div className="popCorsComponent">
                    <MoviePop />
                </div>
            </div>
        </div>
    );
}
export default InitialPage;