import Vuex from 'vuex';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Dialog from '@/js/components/templates/Dialog';
import Vuetify from 'vuetify';
import Vue from 'vue'
import i18n from '@/js/i18n';
import validate from '@/js/validate';
import store from '@/js/store'
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
    })
})