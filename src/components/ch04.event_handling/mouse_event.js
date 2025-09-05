function App() {
    const image_small = 90;
    const image_large = 400;
    const image_path = '/images'; // 이미지 경로 : public 폴더 아래에 images 폴더를 생성합니다.
    const MouseMoveEvent = (event) => {
        const imageSrc = event.target.src;
        console.log(`현재 이미지 : ${imageSrc}`);
        document.getElementById('large_image').src = imageSrc;
    }
    console.log('샘플');
    return (
        <div className="App">
            <h2>마우스 이벤트</h2>
            <p>임의의 이미지에 마우스가 해당 영역으로 들어가면 큰 이미지 영역에 해당 이미지가 보입니다.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={`${image_path}/french_baguette_01.png`} alt="프렌치 바게트"
                                width={image_small} height={image_small}
                                onMouseMove={MouseMoveEvent} />
                        </td>
                        {/* rowSpan={n} : 행 n개 병합, colSpan={n} : 열 n개 병합 */}
                        <td rowSpan={4} width={image_large}>
                            {/* 큰 이미지가 들어가는 영역 */}
                            <img id="large_image" alt="noimage" width={image_large} height={image_large} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/croissant_01.png`} alt="크로아상"
                                width={image_small} height={image_small}
                                onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/brioche_01.png`} alt="브리오슈"
                                width={image_small} height={image_small}
                                onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/ciabatta_01.png`} alt="치아바타"
                                width={image_small} height={image_small}
                                onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default App;