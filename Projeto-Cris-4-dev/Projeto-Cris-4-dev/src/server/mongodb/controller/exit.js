const exit = () => {
    sessionStorage.clear("token");
    location.reload()

}

export default exit;