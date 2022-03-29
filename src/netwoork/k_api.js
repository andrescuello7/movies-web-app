const DataNetwork = () => {
    const identify = localStorage.getItem("identificador")
    const search = localStorage.getItem("search")
    const api_rest = "https://api.tvmaze.com/search/shows?q=";
    return {
        identify,
        search,
        api_rest
    }
}
export default DataNetwork;