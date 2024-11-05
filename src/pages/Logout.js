function LogoutPage(){
    window.localStorage.removeItem("token")
    window.location.href = "./";
}

export default LogoutPage