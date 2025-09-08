import { useState } from "react";

function App() {
    const imageSize = 120; //  이미지 사이즈
    /* 관리해야할 상태(state) 개수가 많으면 객체 형식으로 정의하는 것이 유리함. */
    const [car, setcar] = useState({
        color: 'blue',
        year: '2024',
        model: 'avante',
        image: 'blue',
        comment: '나름 좋아요.',
        modelName: '아반떼(avante)',
    });



    // 중첩 배열을 사용한 Map 객체 정의
    const carMap = new Map([
        ['avante', '아반떼'],
        ['sonata', '소나타'],
        ['grandeur', '그랜져']
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        console.log('이벤트 발생 객체 id : ' + targetId);

        const targetv = event.target.value;
        console.log('이벤트 타겟 값 : ' + targetv);

        if (targetId === 'model') {
            car.setImage(targetv);

            // get(key) : key를 사용하여 해당요소의 value를 반환받음.
            // const message = `${carMap.get(targetv)}(${targetv})`;
            // setModel(message);
        } else if (targetId === 'color') {
            car.setColor(targetv);
            // } else if (targetId === 'year') {
            //     setYear(targetv);
            //     let comment = '';
            //     if (targetv === '2023') {
            //         comment = '구형입니다.'
            //     } else if (targetv === '2024') {
            //         comment = '쓸만 합니다.';
            //     } else if (targetv === '2025') {
            //         comment = '신식입니다.';
            //     } else { }
            //     setcomment(comment);
        }
    };





    return (
        <div className="App">
            <h1>내 차 정보</h1>
            <p>
                자동차의 종류에 따라서, 이미지 변경이 되고 색상은 설명 문구의 색상으로 변경이 됩니다.
            </p>

            {/* entity는 HTML에서 특수문자를 표현하는 기법으로, 규칙을 정해놓은 문자열이 있습니다. */}
            차종 변경 : &nbsp;
            <select id="model" value={car.model} onChange={ChangeTest}>
                <option value="avante">아반떼</option>
                <option value="sonata">소나타</option>
                <option value="grandeur">그랜져</option>
            </select>
            <br /><br />

            색상 변경 : &nbsp;
            <select id="color" onChange={ChangeTest}>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
                <option value="red">빨강</option>
                <option value="green">초록</option>
            </select>
            <br /><br />

            생산 년도 : &nbsp;
            <select id="year" onChange={ChangeTest}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br /><br />

            <p>
                <span style={{ color: car.color, fontWeight: 'bolder' }}>{car.color} </span>색상의 {car.year}년산 {car.model}모델
                <br />
                {comment}
            </p>
            <br /><br />
            <img src={`/images/${car.image}.png`} alt={image} width={imageSize} height={imageSize} />
        </div>

    );

};
export default App;