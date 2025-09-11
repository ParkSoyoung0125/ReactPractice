import { useState } from 'react';

// 부트스트랩 관련 임포트
import Card from 'react-bootstrap/Card';

// 하위 컴포넌트 추가
import Top from './ui/Top';
import Content from './ui/Content';
import Bottom from './ui/Bottom';
import Switcher from './ui/Switcher';

function App() {
    const title = 'React 맛집';
    const comment = '어서오세요, React 맛집입니다.';
    const message = '카운터에서 주문 부탁드립니다. 즐거운 시간 되세요!';

    //신규 상품 추가를 위해 setProducts가 필요함
    const [products, setProducts] = useState([
        { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_01.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
    ]);
    /* mode : 현재 상태의 모드 지정 */
    /* insert, update, delete, read, detail 등등 */
    const [mode, setMode] = useState('');

    /* 프로그램 최초 시작 시 1번이 선택되었다고 가정. */
    const [selectedId, setSelectedId] = useState(1);

    /* 상품 목록에서 특정 상품 1개를 클릭. */
    const ClickArrived = (id) => {
        console.log(`상품아이디 : ${id}`);
        setSelectedId(Number(id)); // 선택한 상품의 id가 변경됨.
        setMode('detail'); // 상세보기 모드로 변환.
    }

    const getProductById = () => {
        // selectedId : 임의의 사용자가 클릭한 상품의 id
        // 상품 목록(products)에서 filter 함수를 이용하여 추출
        // bean은 방금 추출한 객체
        const selelctedProduct = products.filter((bean) => bean.id === selectedId);
        // selelctedProduct는 객체 1개를 저장하고 있는 배열로 반환됨.
        // 따라서, 1번째 항목은 0으로 가져감
        return selelctedProduct[0]
    }

    // /* 수정하려는 상품 1개의 정보를 저장하기 위해 정의 */
    // const [currentProduct, setCurrentProduct] = useState(null);

    /* 버튼을 클릭하여 모드 변경 */
    const ModeChanged = (mode) => {
        console.log(`변경된 모드 : ${mode}`);
        setMode(mode); // 변경된 모드로 mode 스테이트에 할당.

        // if (mode === 'get_update') {
        //     // const currentProduct = getProductById();
        //     // console.log('수정할 상품 정보 출력 : ');
        //     // console.log(currentProduct)
        //     setCurrentProduct(getProductById());

        // }
    }

    // /* 신규 상품을 관리할 state 정의 */
    // const [newItem, setNewItem] = useState(null);

    /* 사용자가 상품 등록 화면에서 내용을 기입하고, 등록 버튼을 누름 */
    const InsertData = (formData) => {
        console.log('등록버튼 누름');

        // 생성될 상품에 적용시킬 신규 아이디
        const newId = Math.max(...products.map((bean) => bean.id)) + 1;

        // newData는 사용자가 입력한 데이터를 저장하는 배열.
        const newData = [{
            id: newId,
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value,
        }];

        console.log(newData);

        // 이전 상품 목록과 신규 품목을 합침(concat : 배열에 사용시 배열끼리 합침)
        const newProducts = products.concat(newData);
        setProducts(newProducts);

        setMode('read'); // 읽기모드로 변경
    }
    // 사용자가 수정화면에서 내용을 수정하고, [수정] 버튼 누르기
    const UpdateData = () => {

    }

    return (

        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/* onClickToContent 프롭스가 리턴되고 난 후 ClickArrived 함수가 동작되도록 하기 */}
                <Content Contents={products} onClickToContent={ClickArrived} />
            </Card.Body>
            <Switcher
                mode={mode}
                product={getProductById()}
                onSubmitInsert={InsertData}
                onSubmitUpdate={UpdateData}
            />
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>
        </Card>

    );
};
export default App;