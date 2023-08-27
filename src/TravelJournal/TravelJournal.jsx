import { data } from "./data";
import Navbar from "./components/Navbar";
import JournalCard from "./components/JournalCard";
import "./style.css";

const TravelJournal = () => {
    return (
        <div className="site-wrapper">
            <Navbar />
            <section className="journal-list">
                {data.map((journal) => (
                    <JournalCard key={journal.id} {...journal} />
                ))}
            </section>
        </div>
    );
};

export default TravelJournal;
