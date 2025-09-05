function App() {
    const ChangeEvent = (event) => {
        // const eventArray = [];
        // for (const evt in event) {
        //     eventArray.push(evt);
        // }
        // console.log(eventArray);
        // console.log(`이벤트 유형 : ${event.type}`);
        // console.log(`이벤트 발생 요소 : ${event.target}`);

        // console.log(`event.target 내에 속성 확인하기`);
        // for (const item in event.target) {
        //     console.log(item);
        // }

        const target_id = event.target.id;
        const target_value = event.target.value;

        console.log(`요소 아이디 : ${target_id}`);

        if (target_id === "input_Box") { // 값을 넣을 inputbox와 일치할때 해당 input에 값을 넣으면
            console.log(`입력 상자 내용 : ${target_value}`); // 그 값을 출력

        } else if (target_id === "menu_select") { // 선택할 셀렉박스와 일치할때
            console.log(`선택된 콤보 상자 값 : ${target_value}`);
            // alert 함수는 사용자에게 메시지를 일방적으로 보여주는 창입니다.
            // confirm 함수와 prompt 함수도 공부하기
            if (target_value === '-') {
                document.getElementById('image01').src = '';
                alert('보여줄 이미지를 선택해 주셔야 합니다.');
            } else {
                const imageUrl = target_value;
                document.getElementById('image01').src = imageUrl;
                document.getElementById('image01').width = 200;
                document.getElementById('image01').height = 200;
            }
        } else {

        }


    }

    return (
        <div className="App">
            <h2>Change 이벤트</h2>
            <input id="input_Box" onChange={ChangeEvent}></input> <br />
            <br />
            <select id="menu_select" onChange={ChangeEvent}>
                <option value={"-"}>항목을 선택해주세요.</option>
                <option value={"americano01_bigsize.png"}>아메리카노</option>
                <option value={"french_baguette_01_bigsize.png"}>프렌치 바게트</option>
                <option value={"croissant_03_bigsize.png"}>크로와상</option>
                <option value={"brioche_04_bigsize.png"}>브리오슈</option>
            </select>
            <br />
            {/* alt 속성은 해당 이미지가 없을 때 보여주는 글자를 지정하는 속성입니다. */}
            <img id="image01" src="" alt="NoImage" />
        </div>
    );
};
export default App;