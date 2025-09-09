import { useState } from "react";

function App() {
    const [name, setName] = useState(''); // 이름
    const [age, setAge] = useState(0); // 나이

    // 회원 명단(원래 SpringBoot에서 받아야와야하지만 임시로 작성)
    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '임우영', age: 45 },
        { id: 3, name: '황인태', age: 60 },
        { id: 4, name: '윤철용', age: 15 },
    ]);

    // <li> 태그의 항목을 더블클릭하면 해당 행(row)을 삭제
    const RemoveSelectedRow = (event) => {
        const id = event.target.id;
        console.log('데이터 타입 확인 : ' + typeof id); // id의 type을 확인해보면 String으로 나옴
        console.log('선택한 항목 id : ' + id);

        // 제거할 항목을 제외하고 나머지 필터링
        const filteredData = members.filter((bean) => bean.id !== Number(id));
        setMembers(filteredData);
    }

    const memberList = members.map((bean) => {
        // 목록 내역을 <li> 태그 형식으로 만들어서 반환.
        // 더블 클릭 시 해당 항목을 목록에서 제거.
        return <li id={bean.id} key={bean.id} onDoubleClick={RemoveSelectedRow}>
            {bean.name}({bean.age})
        </li>;
    });

    const NameChange = (event) => {
        const targetValue = event.target.value;
        console.log(`이름 : ${targetValue}`);
        setName(targetValue);
    }

    const AgeChange = (event) => {
        const targetValue = event.target.value;
        console.log(`나이 : ${targetValue}`);
        setAge(targetValue);
    }

    // 새로 추가되는 회원의 id를 기억하기 위한 state.
    const [nextId, setNextId] = useState(0);

    const AddMember = (event) => {
        // memners 배열에서 id 항목들만 추출
        // 객체로 되어있기 때문에 ...연산자(스프레드 연산자)를 사용하여 스칼라 데이터로 만든다음
        // max() 메소드를 이용해 최대값을 추출
        const newNextId = Math.max(...members.map((bean) => bean.id)) + 1;

        // 신규 id와 입력한 데이터를 이전 배열(members)에 concat() 메소드를 이용하여 추가
        const newMembers = members.concat({ id: newNextId, name: name, age: age });

        setMembers(newMembers); // 회원 명단 갱신

        // 입력 양식 초기화
        setName('');
        setAge(0);

        // 다음 요소 추가를 위하여 식별자 번호(id)를 +1 증가시키기
        setNextId(newNextId + 1);
    }



    return (
        <div className="App">
            이름 : &nbsp;&nbsp;<input type="text" value={name} onChange={NameChange} />
            <br /><br />
            나이 : &nbsp;&nbsp;<input type="text" value={age} onChange={AgeChange} />
            <br /><br />
            &nbsp;<button onClick={AddMember}>추가</button>
            <h4>회원 목록</h4>
            <ul>
                {memberList}
            </ul>
        </div>
    );
}
export default App;