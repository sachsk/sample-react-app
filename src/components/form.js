import MainLogo from "../assets/image.png";
import {Button} from "./Button";
import {CustomInput} from "./CustomInput";


const Form = () => {
    return (<div style={{
        display: "flex",
        flexDirection: "row",
        height: "500px",
        width: "900px",
        background: "whitesmoke",
        borderRadius: "25px 25px 25px 25px ",
        margin: "20px",
        // alignContent: "center",
    }}>
        <div>
            <img alt={"main-logo"} src={MainLogo} height={500} style={{borderRadius: "25px 0px 0px 25px "}}/>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5%",
            paddingRight: "5%",
            alignItems: "center",
            textAlign: "left"
        }}>
            <form>
                <h1 style={{fontFamily: "Poppins", fontWeight: "bolder"}}>Business news delivered weekly.</h1>
                <h4 style={{fontFamily: "Poppins", fontWeight: "normal"}}>Stay up to date with the latest articles and
                    business updates. You'll even get special
                    recommendations weekly</h4>
                <CustomInput type={"email"} placeholderText={"Your Email"}/>
                <Button name={"Subscribe"}/>
            </form>
        </div>
    </div>)
}
export default Form;