import LeftPane from './Left-Pane/Left-Pane';
import RightPane from './Right-Pane/RightPane';
import './scoring.scss';

export default function Scoreboard() {
    return (
        <div className="scoring-page row p-3">
            <LeftPane />
            <RightPane />
        </div>
    )
}