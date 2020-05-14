import Vuex from 'vuex';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Dialog from '@/js/components/templates/Dialog';
import Vuetify from 'vuetify';
import Vue from 'vue'
import i18n from '@/js/i18n';
import validate from '@/js/validate';
import store from '@/js/store';
import { sync } from 'vuex-router-sync';
const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)
describe('Dialog', ()=> {
    let vuetify
    beforeEach(() => {
        vuetify = new Vuetify()
    })
    const actions = {
        actionClick: jest.fn(),
        actionInput: jest.fn()
    }
    //test btn newitem
    it ('test action click new ', () => {
        const wrapper = mount(Dialog, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            propsData:
                {
                    editedIndex: -1,
                    list: [
                        {cleanningshiftcode: 'aaa'},
                    ],
                }
        })
        expect(wrapper.vm.dialog).toBeFalsy()
        const btn = wrapper.find(".v-btn")
        expect(btn.exists()).toBeTruthy()
        btn.trigger('click')
        wrapper.vm.$nextTick(() =>{
            expect(wrapper.vm.dialog).toBeTruthy()
            expect(wrapper.find('.v-btn').exists()).toBeTruthy()
        })
    });
    // test error message in action enter new item 
    it ('test error message in action enter new item  ',async ()=>{
        const wrapper = mount(Dialog, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            propsData:
                {
                    editedIndex: -1,
                    list: [{
                        "shift_id": 3,
                        "shift_code": "AM2",
                        "shift_name": "午前シフト No2",
                        "shift_short_name": "午前2",
                        "shift_start_time": "10:00:00",
                        "shift_end_time": "12:00:00",
                        "break_start_time": null,
                        "break_end_time": null,
                        "row_order": 3,
                        "created_at": "2020-01-28 00:00:02",
                        "updated_at": "2020-04-20 09:16:47.469554",
                        "deleted_at": null
                    },],
                },  
        })

        expect(wrapper.vm.dialog).toBeFalsy()
        const btn = wrapper.find(".v-btn")
        expect(btn.exists()).toBeTruthy()
        btn.trigger('click')
        const shift_code = wrapper.find('#shift-code')
        const shift_name = wrapper.find('#shift-name')
        const short_name = wrapper.find('#short-name')
        const shift_end_time = wrapper.find('#shift-end-time')
        const shift_start_time = wrapper.find('#shift-start-time')
        const break_start_time =wrapper.find('#break-start-time') 
        const break_end_time =wrapper.find('#break-end-time') 
        const result = wrapper.find('#result')
        expect(wrapper.find('#NotNull_code').exists()).toBeTruthy()  
        expect(wrapper.find('#alphaNum_code').exists()).toBeFalsy()
        expect(wrapper.find('#checkDuplicate_code').exists()).toBeFalsy()
        shift_code.setValue('~')
        expect(wrapper.find('#NotNull_name').exists()).toBeTruthy()
        shift_name.setValue('son')
        expect(wrapper.find('#NotNull_shortname').exists()).toBeTruthy()
        short_name.setValue('S')
        expect(wrapper.find('#NotNull_shiftstarttime').exists()).toBeTruthy()
        expect(wrapper.find('#timeRule_shiftstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_shiftstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#checkShiftTermStart_shiftstarttime').exists()).toBeFalsy()
        shift_start_time.setValue('0100')
        expect(wrapper.find('#NotNull_shiftendtime').exists()).toBeTruthy()
        expect(wrapper.find('#TimeRule_shiftendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakEndTime_shiftendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckShiftTerm_shiftendtime').exists()).toBeFalsy()
        shift_end_time.setValue('0900')
        expect(wrapper.find('#TimeRule_breakstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_breakstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakTerm_breakstarttime').exists()).toBeFalsy()
        break_start_time.setValue('0200')
        expect(wrapper.find('#TimeRule_breakendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_breakendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakTerm_breakendime').exists()).toBeFalsy()
        break_end_time.setValue('0500')

        await wrapper.vm.$forceUpdate()
        //shift code
        expect(wrapper.find('#NotNull_code').exists()).toBeFalsy()
        expect(wrapper.find('#alphaNum_code').exists()).toBeTruthy()
        expect(wrapper.find('#checkDuplicate_code').exists()).toBeFalsy()
        // shift name
        expect(wrapper.find('#NotNull_name').exists()).toBeFalsy()
        // shift short name
        expect(wrapper.find('#NotNull_shortname').exists()).toBeFalsy()
        // shift start time
        expect(wrapper.find('#NotNull_shiftstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#timeRule_shiftstarttime').exists()).toBeFalsy()   
        expect(wrapper.find('#checkShiftTermStart_shiftstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_shiftstarttime').exists()).toBeFalsy()
        // shift end time
        expect(wrapper.find('#NotNull_shiftendtime').exists()).toBeFalsy()
        expect(wrapper.find('#TimeRule_shiftendtime').exists()).toBeFalsy() 
        expect(wrapper.find('#CheckShiftTerm_shiftendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakEndTime_shiftendtime').exists()).toBeFalsy()        
        // break start time
        expect(wrapper.find('#TimeRule_breakstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_breakstarttime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakTerm_breakstarttime').exists()).toBeFalsy()
        // break end time
        expect(wrapper.find('#TimeRule_breakendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakStartTime_breakendtime').exists()).toBeFalsy()
        expect(wrapper.find('#CheckBreakTerm_breakendime').exists()).toBeFalsy()
    });
    //tets btn cancel
    it ('test action click cancel ', () => {
        const wrapper = mount(Dialog, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            propsData:
                {
                    editedIndex: -1,
                    list: [
                        {cleanningshiftcode: 'aaa'},
                    ],
                }
        })
        expect(wrapper.vm.dialog).toBeFalsy()
        const btn = wrapper.find(".v-btn")
        expect(btn.exists()).toBeTruthy()
        btn.trigger('click')
        wrapper.vm.$nextTick(() =>{
            expect(wrapper.vm.dialog).toBeTruthy()
            expect(wrapper.find('.cancel').exists()).toBeTruthy()
            wrapper.find('.cancel').trigger('click')
        })
    });
    //test btn save
    it ('test action click save ', () => {
        const wrapper = mount(Dialog, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            propsData:
                {
                    editedIndex: -1,
                    list: [
                        {cleanningshiftcode: 'aaa'},
                    ],
                }
        })
        expect(wrapper.vm.dialog).toBeFalsy()
        const btn = wrapper.find(".v-btn")
        expect(btn.exists()).toBeTruthy()
        btn.trigger('click')
        wrapper.vm.$nextTick(() =>{
            expect(wrapper.vm.dialog).toBeTruthy()
            expect(wrapper.find('.save').exists()).toBeTruthy()
            wrapper.find('.save').trigger('click')
        })
    })

})
