import airbnb from "/assets/airbnb/images/airbnb-logo.png";

const Navbar = () => {
    return (
        <nav>
            <img src={airbnb} alt="Airbnb logo" className="nav--logo" />
        </nav>
    );
};

export default Navbar;
