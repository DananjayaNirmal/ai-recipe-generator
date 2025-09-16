import logo from "../images/logo.jpg"

export default function Header(){
    return(
        <div className = "header">
            <img src = {logo}/>  
            <h3>Chef Claude</h3>
            
        </div>
    )
}