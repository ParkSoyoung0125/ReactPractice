function App(){
    const function01 = function(){
        return 'hello~~world';
    }
    
    const function02 = () => {
        return '여러분 안녕하세요';
    }
    
    const function03 = () => '어서오세요 방가염';


    console.log('\n매개변수가 없는 함수 표현식');
    console.log(function01());

    console.log('\n매개변수가 없는 화살표 함수');
    console.log(function02());

    console.log('\n중괄호와 return 문이 없는 화살표 함수');
    console.log(function03());

    const function04 = (name) => {
        if(name === undefined){     // 동등연산자, 값만 비교하고 타입을 비교하지않음
            return '누구세요';       // 타입이 달라도 값이 같으면 true가 됨 / 0 == false -> true됨
        }                           // null === undefined가 타입까지 비교해서 더 정확함.
        else{
            return `hello~ ${name}`;
        }
    }

    console.log('\n매개변수 1개 짜리');
    console.log(function04('김철수'));
    console.log(function04());

    const function05 = (first, second) => {
        return `${first} 더하기 ${second}은(는) ${first+second}입니다.`;
    }
    console.log(function05('김철수','남자'));
    console.log('\n매개변수 2개 짜리 화살표 함수');
    console.log(function05(10,20));

    const function06 = (first, second) => {
        return `${first} 곱하기 ${second}은(는) ${first*second}입니다.`;
    }
    console.log(function06(5,10));
    
    const adultCheck = (name, age) => {
        let adult = `${age>20? '성인' : '미성년자'}`;
        const result = `${name}님(${age}세)은 '${adult}'입니다.`;
        return result;
    }
    console.log(adultCheck('박영희',10));
    console.log(adultCheck('윤영식',34));

    console.log('\n반환타입이 객체인 경우');
    const function07 = (first,second) =>{
        const result = {add:first+second, mul:first*second};
        console.log(result);
        return result
    }
    console.log(function07(14,5));
    console.log('대괄호 기호와 key 이름을 이용하여 접근이 가능함.');
    console.log('덧셈결과 : ' + function07(14,5)['add']);
    console.log('곱셈결과 : ' + function07(14,5)['mul']);
    console.log('곱셈결과 : ' + function07(14,5).mul);

    let answer= function07(10,20);
    console.log(answer[`add`]);
    console.log(answer[`mul`]);



    return(
        <div className="App">
            화살표 함수
        </div>
    );
};
export default App;