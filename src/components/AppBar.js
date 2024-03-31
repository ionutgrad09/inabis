import logo from "../photos/inabis_logo.png";

const AppBar = () => {
    return (
        <div style={{
            marginBottom: "20px",
            paddingLeft: "10px",
            height: "80px",
            backgroundColor: "#1876d2",
            color: "white",
            display: "flex",
            justifyContent: "start",
            alignItems: "center"
        }}>
            <img style={{height: "100px"}} src={logo} alt="logo"/>
            <h3>INABIS VLA</h3>
        </div>
    )
}

export default AppBar;