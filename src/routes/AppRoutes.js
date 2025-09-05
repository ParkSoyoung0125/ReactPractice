// 'react-router-dom'은 라우팅을 위한 라이브러리
// 기본적으로 설치가 안되어있어, 차후에 설치를 해주어야 함.
// npm install react-router-dom (엔터)

import { Routes, Route } from 'react-router-dom';


// ./ 은 현재폴더 , ../ 은 상위폴더 (.../은 없음 , ../을 ../../ 식으로 이어붙여서 계속 상위폴더로 타고올라감)
//ch02 장
// import 앱이름(임의로 설정한 이름) from '전체경로/파일명'
import AppLetConst from '../components/ch02.es6_syntax/let_const';
import AppTemplateString from '../components/ch02.es6_syntax/template_string';
import AppSubjectList from '../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from '../components/ch02.es6_syntax/make_function';
import AppArrowFunction from '../components/ch02.es6_syntax/arrow_function';
import AppArrayMap from '../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from '../components/ch02.es6_syntax/spread_operator';

//ch03장
import AppClassComponenet from '../components/ch03.component/components01';
import AppfunctionComponenet from '../components/ch03.component/components02';
import AppComponentSeparate from '../components/ch03.component/component_separate';
import AppusePops from '../components/ch03.component/use_props';
import AppFileProps from '../components/ch03.component/file_separator';
import AppArrayAndTable from '../components/ch03.component/array_and_table_01';
import AppArrayAndTable2 from '../components/ch03.component/array_and_table_02';

// ch04장
import AppClickEvent from '../components/ch04.event_handling/click_event';
import AppChangeEvent from '../components/ch04.event_handling/change_event';
import AppMouseEvent from '../components/ch04.event_handling/mouse_event';
import AppKeyEvent from '../components/ch04.event_handling/key_event';
import AppComboChange from '../components/ch04.event_handling/combo_change';

function AppRoutes() {
    return (
        <Routes>
            {/* element 속성에는 컴포넌트 자체가 아니라 JSX 요소를 넣어야합니다. */}
            {/*ch02장*/}
            <Route path="/" element={<AppLetConst />} />
            <Route path="/let_const" element={<AppLetConst />} />
            <Route path="/template_string" element={<AppTemplateString />} />
            <Route path="/make_subject_list" element={<AppSubjectList />} />
            <Route path="/make_function" element={<AppMakeFunction />} />
            <Route path="/arrow_function" element={<AppArrowFunction />} />
            <Route path="/array_map" element={<AppArrayMap />} />
            <Route path="/spread_operator" element={<AppSpreadOperator />} />

            {/*ch03장*/}
            <Route path="/components01" element={<AppClassComponenet />} />
            <Route path="/components02" element={<AppfunctionComponenet />} />
            <Route path="/component_separate" element={<AppComponentSeparate />} />
            <Route path="/use_props" element={<AppusePops />} />
            <Route path="/file_separator" element={<AppFileProps />} />
            <Route path="/array_and_table_01" element={<AppArrayAndTable />} />
            <Route path="/array_and_table_02" element={<AppArrayAndTable2 />} />

            {/*ch04장*/}
            <Route path="/click_event" element={<AppClickEvent />} />
            <Route path="/change_event" element={<AppChangeEvent />} />
            <Route path="/mouse_event" element={<AppMouseEvent />} />
            <Route path="/key_event" element={<AppKeyEvent />} />
            <Route path="/combo_change" element={<AppComboChange />} />

        </Routes>
    );
};

export default AppRoutes;