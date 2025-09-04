// 넘겨진 프로퍼티는 파일명() 내에 적어주면 됩니다.
function App({ greeting, welcome }) {
    //console.log('샘플');

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
};
export default App;