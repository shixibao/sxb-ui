import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'

import Row from './layout/row.vue';
import Col from './layout/col.vue';

import Aside from './container/aside.vue';
import Container from './container/container.vue';
import Footer from './container/footer.vue';
import Header from './container/header.vue';
import Main from './container/main.vue';
import Input from './input.vue';

import Upload from './upload/upload.vue'
import Progress from './progress.vue'
import DataPicker from './date-picker/date-picker.vue'
import DataRangePicker from './date-picker/date-range-picker.vue'
import Popover from './popover.vue';

const install = (Vue) =>{
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
    Vue.component(Row.name,Row)
    Vue.component(Col.name,Col)

    Vue.component(Aside.name,Aside)
    Vue.component(Container.name,Container)
    Vue.component(Footer.name,Footer)
    Vue.component(Header.name,Header)
    Vue.component(Input.name,Input)

    Vue.component(Upload.name,Upload)
    Vue.component(Progress.name,Progress)

    Vue.component(DataPicker.name,DataPicker)
    Vue.component(DataRangePicker.name,DataRangePicker)
    Vue.component(Popover.name, Popover);
}

// 有可能组件会通过script标签的方式引入
if(window.Vue) {
    install(window.Vue)
}

export default {
    install
}