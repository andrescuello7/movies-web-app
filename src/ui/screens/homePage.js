import HomePageController from "../screenController/homePageController";
import NavbarComponent from "../components/navbarComponent";

const HomePage = () => {
    const { handleOnChange, submitSearch, movieView } = HomePageController();
    return (
        <div className="App-header">
            <div className="w-100">
                <div className="navbarComponent">
                    <NavbarComponent navbar={true} submit={submitSearch} />
                </div>
                <div className="mt-2 mx-2">
                    <div className="mt-2">
                        <input type='text' onChange={handleOnChange} placeholder="Buscar" className="inputSearch" />
                    </div>
                    <div className="mt-5 mx-5 text-start w-100">
                        <p className="titleMovieHome"><b>Peliculas</b></p>
                    </div>
                    <hr className="mx-2" />
                </div>
                <div className="cardMovieHome">
                    {movieView}
                </div>
            </div>
        </div>
    );
}
export default HomePage;