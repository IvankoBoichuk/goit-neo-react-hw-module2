const Options = ({ handler, reset, totalFeedback }) => {
    return <p>
        <button onClick={() => handler("good")}>Good</button>
        <button onClick={() => handler("neutral")}>Neutral</button>
        <button onClick={() => handler("bad")}>Bad</button>
        {totalFeedback > 0 && <button onClick={() => reset()}>Reset</button>}
    </p>;
};

export default Options;