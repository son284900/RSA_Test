import Vuex from 'vuex';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import CleaningStatusDialog from '@/js/components/templates/CleaningStatusDialog';
import Vuetify from 'vuetify';
import Vue from 'vue'
import i18n from '@/js/i18n';
import validate from '@/js/validate';
import store from '@/js/store';
const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)
describe('CleaningStatusDialog',()=>{
    let vuetify
    let wrapper
    beforeEach(() => {
        vuetify = new Vuetify()
        store.dispatch = jest.fn()
        wrapper = mount(CleaningStatusDialog, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            propsData:
                {
                    editedIndex: -1,
                    list:[],
                },
            sync:true,
                
        }) 
    })
    const actions = {
        actionClick: jest.fn(),
        actionInput: jest.fn()
    }
    it('test action click save ',async () =>{
        wrapper.vm.dialog=true
        expect(wrapper.vm.dialog).toBeTruthy()
        expect(wrapper.find('#save').exists()).toBeTruthy()
        wrapper.find('#save').trigger('click')
    });
    it('test action click cancel ',async () =>{
        wrapper.vm.dialog=true
        expect(wrapper.vm.dialog).toBeTruthy()
        expect(wrapper.find('#cancel').exists()).toBeTruthy()
        wrapper.find('#cancel').trigger('click')
    });
    
})
