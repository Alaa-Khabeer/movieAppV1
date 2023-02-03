import "./notfound.css";
function NotFound(){
    return(
        <div>
        <p className=" fs-2 fst-italic txt">Opps! Page not found</p>
        <img src={require("./assets/not-found-page.png")} className="mx-auto d-block"/>
    </div>
    );
}
export default NotFound;