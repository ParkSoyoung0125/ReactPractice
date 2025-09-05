function App() {
    /* event는 이벤트 객체라고 합니다. */
    const ClickEvent01 = (event) => {
        console.log('샘플');
        console.log(event);
    }

    const ClickEvent02 = (name) => {
        const result = `반갑습니다 ${name}님`;
        console.log(result);
    }

    const ClickEvent03 = (num1, num2) => {
        const sum = `${num1} + ${num2} = ${num1 + num2}`;
        console.log(sum);
    }

    const ClickEvent04 = (message, event) => {
        const result = `파라미터 정보 : ${message}`;
        console.log(result);

        /* 해당 이벤트가 보유하고 있는 속성(property) 목록을 저장할 배열입니다. */
        const eventArray = [];

        for (const evt in event) {
            eventArray.push(evt);
        }

        console.log('해당 이벤트 객체가 보유한 속성 정보');
        console.log(eventArray);
        console.log(`이벤트 유형 : ${event.type}`);
        console.log(`이벤트 발생 요소 : ${event.target}`);
    }

    const ClickEvent05 = (event) => {
        console.log(`이벤트 발생 요소 : ${event.target.id}`);

        const myid = event.target.id;
        if (myid === 'register') {
            console.log('등록하기');
        } else if (myid === 'cancle') {
            console.log('취소하기');
        } else {
            console.log('기타사항');
        }

        console.log(`이벤트 발생 요소 : ${myid}`);
    }

    return (
        <div className="App">
            <h2>클릭 이벤트</h2>
            {/* 매개 변수가 0개일 때는 함수의 이름만 명시하면 됩니다. */}
            {/* 해당 버튼을 클릭했을 때 ClickEvent01함수가 동작합니다. */}
            <button onClick={ClickEvent01}>매개변수 0개</button> <br />

            {/* 매개 변수가 있는 경우 화살표 함수로 둘러 싸야합니다. */}
            <button onClick={() => ClickEvent02('김규식')}>매개변수 1개</button> <br />
            <button onClick={() => ClickEvent03(1, 2)}>매개변수 2개</button> <br />

            {/* 이벤트 객체를 사용하고자 하는 경우 */}
            <button onClick={(event) => ClickEvent04('hello', event)}>이벤트 객체</button> <br />

            <button id="register" onClick={(event) => ClickEvent05(event)}>등록</button> <br />
            <button id="cancle" onClick={(event) => ClickEvent05(event)}>취소</button> <br />

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
        </div>
    );
};
export default App;