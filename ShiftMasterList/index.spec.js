import Vuex from 'vuex';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import ShiftMasterList from '@/js/components/pages/ShiftMasterList';
import Vuetify from 'vuetify';
import Vue from 'vue'
import i18n from '@/js/i18n';
import validate from '@/js/validate';
import store from '@/js/store';
const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)
describe('ShiftMasterList',()=>{
    let vuetify
    let wrapper
    let res = {
    "status": "success",
    "result": {
        "data": [{
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
        "message": "Success",
        "code": "200",
        "errors": []
    }
}
    beforeEach(() => {
        vuetify = new Vuetify()
        store.dispatch = jest.fn()
        store.dispatch.mockResolvedValue(res)
        wrapper = mount(ShiftMasterList, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            sync:false
        }) 

    })
    const actions = {
        actionClick: jest.fn(),
        actionInput: jest.fn()
    }
    it('test action click edit ',async () =>{
        wrapper.vm.getList() 
        expect(wrapper.find('#edit').exists()).toBeTruthy()
        wrapper.find('#edit').trigger('click')
    });

    it('test action click delete ',async () =>{
        window.confirm = jest.fn(() => true)
        wrapper.vm.getList() 
        expect(wrapper.find('#delete_shift').exists()).toBeTruthy()
        wrapper.find('#delete_shift').trigger('click')
    });
    
})