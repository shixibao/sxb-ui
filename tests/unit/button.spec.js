import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('test Button.vue', () => {
    it('1.测试button能否正常显示slot里的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'slot-test'
            }
        })
        expect(wrapper.text()).to.be.eq('slot-test')
    })
    it('2.测试icon传入是否能正常显示', () => {
        const wrapper = shallowMount(Button,{
            stubs:{
                's-icon':Icon // 替换的功能
            },
            propsData:{
                icon:'sousuo'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
    })
    it('3.测试loading时 按钮是禁用状态', () => {
        const wrapper = shallowMount(Button,{
            stubs:{
                's-icon':Icon // 替换的功能
            },
            propsData:{
                loading:true
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
    })
    it('4.测试按钮能否正常点击', () => {
        const wrapper = shallowMount(Button,{
            // 桩  nodejs 内置文件 
            // stubs:['s-icon'],// 不去渲染icon 只是一个加标签
        });
        wrapper.find('button').trigger('click');
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(2)
    })
    it('5.按钮传入position是否正常显示', () => {
        const wrapper = shallowMount(Button,{
            attachToDocument:true, // 将组件挂载到浏览器上
            stubs:{
                's-icon':Icon // 替换的功能
            },
            slots:{
                default:'zhu-ui'
            },
            propsData:{
                iconPosition: 'right',
                icon:'sousuo'
            }
        });
        let ele = wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('1');
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-sousuo')
        wrapper.setProps({iconPosition: 'left'})
        wrapper.vm.$nextTick().then(() => {

            expect(getComputedStyle(ele).order).to.eq('2');
        })
    })
})