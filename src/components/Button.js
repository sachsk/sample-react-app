export const Button = ({name}) => {
    return (
        <button style={{
            borderRadius: "0px 10px 10px 0px ",
            width: 100,
            height: 42,
            border: "none",
            background: "#3625E6",
            color: "white"
        }}>{name}
        </button>
    )
}