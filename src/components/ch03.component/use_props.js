
// ui에 폴더에 있는 Top01이라는 앱을 TOP로 부르겠다.
import Top from './ui/Top02';
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';

function App() {
    console.log('샘플');
    const breadList = ['소금빵', '단팥빵', 'BLT샌드위치', '찹쌀도나쓰', '소보로빵'];
    const coffeeList = ['아메리카노', '카페라떼', '카페모카', '돌체라떼', '카라멜마키아또'];

    return (
        <div className="App">
            <Top greeting="Coffee & Bread" welcome="어서오세요, 즐거운 시간 되세요." />
            {/*<Content bread01="소금빵" bread02="단팥빵" bread03="BLT샌드위치" bread04="찹쌀도나쓰" */}
            {/* breadList를 props로 전달하기 */}
            <Content type="ul" menus={breadList} />
            <hr />
            <Content type="ol" menus={coffeeList} />
            <Bottom goodbye="안녕히 가세요." comment="다음에 또 뵙겠습니다." />
        </div>
    );
};
export default App;