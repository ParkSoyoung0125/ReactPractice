import { useState } from "react";

function App() {
    console.log('샘플');
    // button의 대한 함수 작성
    const [color, setColor] = useState('red');
    const [name, setName] = useState('카푸치노');
    const [image, setImage] = useState('cappuccino01.png');

    // button 태그의 onclick에 함수 대입
    // 함수의 기능 : 이미지 변경, 글씨 색상 변경(state 사용) -> set기능 사용?

    const ClickEvent = (event) => {
        console.log(`현재 색상 : ${color}`);
        if (color === 'red') {
            setColor('blue');
        } else {
            setColor('red');
        }

        console.log(`현재 이미지 : ${image}`)
        if (image === 'cappuccino01.png') {
            setImage('public/images/vanilla_latte_01.png');
        } else {
            setImage('cappuccino01.png');
        }

        console.log(`현재 이름 : ${name}`);
        if (name === '카푸치노') {
            setName('바닐라라떼');
        } else {
            setName('카푸치노')
        }

    };

    return (
        <div className="App">
            <h1>My favorite color is {color}!</h1>

            {/* 외부 {} 기호는 JSX 표현식에 사용하는 중괄호 */}
            {/* 내부 {} 기호는 자바 스크립트 객체 표현 시 사용하는 중괄호 */}
            <span style={{ color: color, fontWeight: "bold" }}>글자 색상</span>
            <br /><br />
            <button onClick={ClickEvent}>
                클릭시 이미지 변경 및 {color} 색상으로 변경
            </button>
            <br /><br />
            <h4>{name}</h4>
            <img src={`/images/${image}`} alt={name} width={210} height={210} />
        </div>
    );
};
export default App;