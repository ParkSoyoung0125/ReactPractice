import { useEffect, useState } from "react";

function App() {
    const imageSize = 300;
    const [count, setCount] = useState(0); // 카운터 변수
    const [twoTimes, settwoTimes] = useState(0); // 카운터의 2배수
    const [Another, setAnother] = useState(0); // 카운터의 2배수
    const imagePath = '/images'; // 이미지 경로
    const [image, setImage] = useState(`${imagePath}/americano01.png`);
    const [imageIdx, setImageIdx] = useState(0); // 현재 선택된 이미지의 색인 번호

    const imageArray = [
        'americano01.png',
        'cappuccino01.png',
        'brioche_01.png',
        'croissant_01.png',
    ];

    const TodoSomething = () => {
        console.log('카운트 변수 값 : ' + count);
        settwoTimes(() => 2 * count);
        setAnother(() => 3 * count + 1);

        console.log('현재 이미지의 색인 번호 : ' + imageIdx);


        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage);
        setImageIdx(imageIdx + 1);
        if (imageIdx === (imageArray.length - 1)) {
            setImageIdx(0);
        }
        // 해당 이미지 변경
        // 이미지의 색인 번호 +1
    }

    // 최초 한번 화면 갱신(randei)이 되고나서, count가 바뀔때마다 다시 그리기를 해줍니다
    useEffect(TodoSomething, [count]);



    return (
        <div className="App">
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>카운터</td>
                        <td style={{ border: '1px solid black' }}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>2 곱하기</td>
                        <td style={{ border: '1px solid black' }}>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>3 곱하기 더하기 1</td>
                        <td style={{ border: '1px solid black' }}>{Another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* 화살표 함수를 직접 속성창에 작성할 수 있음 */}
            <button onClick={() => { setCount(() => count + 1) }}>
                &nbsp;값:카운트 값이1 더히기&nbsp;
            </button>
            <div>
                <img src={image} alt="대안 이미지" width={imageSize} height={imageSize} />
            </div>
        </div >
    );
};
export default App;