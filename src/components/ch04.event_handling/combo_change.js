// useState 사용을 위해 import 함
import React, { useState } from "react";

function App() {
    // useState : 리액트의 상태관리 구문
    // 컴포넌트 안에서 category, setCategory의 상태를 저장하고, 리렌더링해도 값을 유지함.
    // setCategory 의 기본값을 "-"로 하겠다는 의미
    const [category, setCategory] = useState("-");

    const coffeeList = [
        { id: 1, name: "아메리카노", price: 5000, description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 2, name: "카푸치노", price: 6000, description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." },
        { id: 3, name: "에스프레소", price: 3000, description: "이탈리아에서 탄생한 진한 맛의 커피 음료입니다. 뜨거운 물을 고압으로 강제로 통과시켜 만들어지는데, 이 때문에 일반적인 커피보다 맛이 진하고 향도 풍부합니다." },
        { id: 4, name: "카페 모카", price: 7000, description: "초콜릿 시럽을 더해 부드러운 달콤한 맛을 더해주며, 에스프레소와 스팀밀크로 인해 진한 커피 향이 살아나는 것이 특징입니다." },
        { id: 5, name: "바닐라 라떼", price: 6500, description: "스팀밀크에 바닐라 시럽을 더해서 만든 커피 음료입니다. 부드러운 스팀밀크와 달콤한 바닐라 시럽이 조화를 이루며, 쓴 커피 향을 중화시켜 부드러운 맛을 느낄 수 있습니다." }
    ];

    const breadList = [
        { id: 1, name: "프렌치 바게트", image: "french_baguette_01_bigsize.png", description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", image: "croissant_03_bigsize.png", description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "브리오슈", image: "brioche_04_bigsize.png", description: "프랑스의 전통적인 달콤한 빵으로, 기름과 계란이 많이 들어가서 부드럽고 고소한 맛과 부드러운 식감이 특징입니다." },
        { id: 4, name: "치아바타", image: "whitewine01_bigsize.png", description: "빵 자체는 비교적 폭이 넓은 직사각형 모양을 띠며, 바삭하면서도 촉촉하고 부드러운 식감이 특징입니다." }
    ];

    // 새로운 데이터가 추가되거나 삭제되어도 유동적으로 변경하기 위해 리스트를 배열함.
    const menuMap = {
        Breads: breadList,
        Coffees: coffeeList,
    };

    // const listTagMap = {
    //     Breads: "ul",
    //     Coffees: "ol",
    // }; << 리스트 별로 태그의 기본값을 설정하는 배열.

    // 셀렉트 박스의 값이 바뀔 때 그 값을 상태로 저장해서 화면을 다시 그리게 하는 이벤트 핸들러 
    const HandleChange = (event) => {
        const target_value = event.target.value;
        setCategory(target_value);
    }

    // 선택한 리스트가 Null일 경우 빈 배열을 주겠다는 의미(방어&에러방지)
    const items = menuMap[category] ?? [];

    // const ListTag = listTagMap[category] ?? "ul"; 
    // 카테고리에 따라 listTagMap로 받아온 태그를 변경하되 기본값은 ul로 설정 

    // 선택한 리스트의 객체에 대한 설명을 띄우되 객체가 Null일 경우 안내메시지 띄우기
    function handleItemClick(item) {
        alert(item.description ?? "설명이 없습니다."); // 클릭된 <li>의 텍스트를 alert로 표시
    }

    return (
        <div className="App">
            <h3>이벤트 실습</h3>
            <p>다음 중 하나를 선택해주세요</p>
            {/* select이 변경될 경우 select의 value를 변경 */}
            <select value={category} onChange={HandleChange}>
                <option value="-">옵션을 선택해주세요</option>
                <option value="Breads">빵류</option>
                <option value="Coffees">커피류</option>
            </select>
            {/* cursor: "pointer" : 커서를 올리면 손가락모양이 뜬다는 뜻
                 backgroundColor: "#f0f0f0" : 배경색 회색
                 onClick={() => handleItemClick(item) : 클릭 시 실행할 함수 전달*/}
            <ul style={{ cursor: "pointer", backgroundColor: "#f0f0f0" }}>{items.map((item) => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                    {item.name}
                </li>
            ))}
            </ul>

        </div>
    );
};
export default App;