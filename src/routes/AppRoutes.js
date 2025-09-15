// 'react-router-dom'은 라우팅을 위한 라이브러리
// 기본적으로 설치가 안되어있어, 차후에 설치를 해주어야 함.
// npm install react-router-dom (엔터)

import { Routes, Route } from 'react-router-dom';


// ./ 은 현재폴더 , ../ 은 상위폴더 (.../은 없음 , ../을 ../../ 식으로 이어붙여서 계속 상위폴더로 타고올라감)

// Practice
import AppPractice from '../components/Practice/practice01';

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
import AppSubmitEvent from '../components/ch04.event_handling/submit_event';

// ch05장
import AppUseState from '../components/ch05.hooks/use_state_01';
import AppUseState02 from '../components/ch05.hooks/use_state_02';
import AppUseState03 from '../components/ch05.hooks/use_state_03';
import AppUseState04 from '../components/ch05.hooks/use_state_04';
import AppUseEffect01 from '../components/ch05.hooks/use_effect_01';
import AppUseEffect02 from '../components/ch05.hooks/use_effect_02';
import AppUseEffect03 from '../components/ch05.hooks/use_effect_03';

// CH06장
import AppCAFE01 from '../components/ch06.bootstrap/coffee_bread_01/main';
import AppCAFE02 from '../components/ch06.bootstrap/coffee_bread_02/main';
import AppCAFE03 from '../components/ch06.bootstrap/coffee_bread_03/main';
import AppCAFE04 from '../components/ch06.bootstrap/coffee_bread_04/main';
import AppCAFE05 from '../components/ch06.bootstrap/coffee_bread_05/main';
import AppCAFE06 from '../components/ch06.bootstrap/coffee_bread_06/main';
import AppCAFE07 from '../components/ch06.bootstrap/coffee_bread_07/main';

function AppRoutes() {
    return (
        <Routes>
            {/*Practice*/}
            <Route path="/practice01" element={<AppPractice />} />

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
            <Route path="/submit_event" element={<AppSubmitEvent />} />

            {/* ch05장 */}
            <Route path="/use_state_01" element={<AppUseState />} />
            <Route path="/use_state_02" element={<AppUseState02 />} />
            <Route path="/use_state_03" element={<AppUseState03 />} />
            <Route path="/use_state_04" element={<AppUseState04 />} />
            <Route path="/use_effect_01" element={<AppUseEffect01 />} />
            <Route path="/use_effect_02" element={<AppUseEffect02 />} />
            <Route path="/use_effect_03" element={<AppUseEffect03 />} />

            {/* ch06장 */}
            <Route path="/coffee_bread_01" element={<AppCAFE01 />} />
            <Route path="/coffee_bread_02" element={<AppCAFE02 />} />
            <Route path="/coffee_bread_03" element={<AppCAFE03 />} />
            <Route path="/coffee_bread_04" element={<AppCAFE04 />} />
            <Route path="/coffee_bread_05" element={<AppCAFE05 />} />
            <Route path="/coffee_bread_06" element={<AppCAFE06 />} />
            <Route path="/coffee_bread_07" element={<AppCAFE07 />} />

        </Routes>
    );
};

export default AppRoutes;