export const CustomInput = ({type, placeholderText}) => {
    return (
        <input style={{
            borderRadius: "10px 0px 0px 10px ",
            width: 300,
            height: 40,
            border: "none",
            paddingLeft: 15
        }}
               type={type} placeholder={placeholderText}/>
    )
}