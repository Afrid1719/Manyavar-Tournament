import CurrentOverEntry from "../../../components/current-over-entry/current-over-entry";
import Strikers from "../../../components/strikers/strikers";

export default function LeftPane() {
    return (
        <div className="data-input-section col-7 border-end overflow-auto">
            <Strikers />
            <CurrentOverEntry />
        </div>
    );
}