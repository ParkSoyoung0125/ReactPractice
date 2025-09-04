function App({ goodbye, comment }) {
    console.log('샘플');
    return (
        <article>
            <h2>
                <p>{goodbye} {comment}</p>
            </h2>
        </article>
    );
};
export default App;