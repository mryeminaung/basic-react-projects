import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { data } from './data';
import "./style.css";

const AirBnb = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {data.map(info => <Card key={info.id} {...info} />)}
            </section>
        </>
    );
};

export default AirBnb;
