// 프로그램 도므에 따라서 화면을 분기해주는 스윕치 앱

import Display from './Display';
import CreateContent from './CreateContent';

function App({ mode, product, onSubmitInsert }) {
    console.log(`현재모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(`등록 버튼누름 : (switcher)`);
        onSubmitInsert(formData); // 넘어온 form 정보를 main파일로 넘김
    }

    switch (mode) {
        case 'detail':
            return <Display product={product} />;
        case 'get_insert':
            return <CreateContent onSubmitInsert={onSwitchInsert} />;
        case 'read':
            return <div />;
        case 'get_delete':
            return <Display product={product} />
        case 'get_category':
            return <Display product={product} />
        default:
            return null;

    }


};

export default App;