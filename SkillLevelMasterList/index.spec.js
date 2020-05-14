import Vuex from 'vuex';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import WorkLoadMasterList from '@/js/components/pages/WorkLoadMasterList';
import Vuetify from 'vuetify';
import Vue from 'vue'
import i18n from '@/js/i18n';
import validate from '@/js/validate';
import store from '@/js/store';
const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)
describe('WorkLoadMasterList',()=>{
    let vuetify
    let wrapper
    let res = {
        "status": "success",
        "result": {
          "data": [
            {
              "clean_room_skill_level_id": 107,
              "room_type_id": 1,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:44",
              "updated_at": "2020-04-20 18:22:44",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 104,
              "room_type_id": 1,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:43",
              "updated_at": "2020-04-20 18:22:43",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 101,
              "room_type_id": 1,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:42",
              "updated_at": "2020-04-20 18:22:42",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 100,
              "room_type_id": 1,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:42",
              "updated_at": "2020-04-20 18:22:42",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 98,
              "room_type_id": 2,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:41",
              "updated_at": "2020-04-20 18:22:41",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 95,
              "room_type_id": 2,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:40",
              "updated_at": "2020-04-20 18:22:40",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 92,
              "room_type_id": 2,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:39",
              "updated_at": "2020-04-20 18:22:39",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 91,
              "room_type_id": 2,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:39",
              "updated_at": "2020-04-20 18:22:39",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 89,
              "room_type_id": 3,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:38",
              "updated_at": "2020-04-20 18:22:38",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 86,
              "room_type_id": 3,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:38",
              "updated_at": "2020-04-20 18:22:38",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 83,
              "room_type_id": 3,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:37",
              "updated_at": "2020-04-20 18:22:37",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 82,
              "room_type_id": 3,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:37",
              "updated_at": "2020-04-20 18:22:37",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 80,
              "room_type_id": 4,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:36",
              "updated_at": "2020-04-20 18:22:36",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 77,
              "room_type_id": 4,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:35",
              "updated_at": "2020-04-20 18:22:35",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 73,
              "room_type_id": 4,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:34",
              "updated_at": "2020-04-20 18:22:34",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 74,
              "room_type_id": 4,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:34",
              "updated_at": "2020-04-20 18:22:34",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 71,
              "room_type_id": 5,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:33",
              "updated_at": "2020-04-20 18:22:33",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 68,
              "room_type_id": 5,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:32",
              "updated_at": "2020-04-20 18:22:32",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 65,
              "room_type_id": 5,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:32",
              "updated_at": "2020-04-20 18:22:32",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 62,
              "room_type_id": 6,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:31",
              "updated_at": "2020-04-20 18:22:31",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 64,
              "room_type_id": 5,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:31",
              "updated_at": "2020-04-20 18:22:31",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 59,
              "room_type_id": 6,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:30",
              "updated_at": "2020-04-20 18:22:30",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 55,
              "room_type_id": 6,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:29",
              "updated_at": "2020-04-20 18:22:29",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 56,
              "room_type_id": 6,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:29",
              "updated_at": "2020-04-20 18:22:29",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 53,
              "room_type_id": 7,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:28",
              "updated_at": "2020-04-20 18:22:28",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 50,
              "room_type_id": 7,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:27",
              "updated_at": "2020-04-20 18:22:27",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 47,
              "room_type_id": 7,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:26",
              "updated_at": "2020-04-20 18:22:26",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 46,
              "room_type_id": 7,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:26",
              "updated_at": "2020-04-20 18:22:26",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 44,
              "room_type_id": 8,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:25",
              "updated_at": "2020-04-20 18:22:25",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 41,
              "room_type_id": 8,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:24",
              "updated_at": "2020-04-20 18:22:24",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 38,
              "room_type_id": 8,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:23",
              "updated_at": "2020-04-20 18:22:23",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 37,
              "room_type_id": 8,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:23",
              "updated_at": "2020-04-20 18:22:23",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 35,
              "room_type_id": 9,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:22",
              "updated_at": "2020-04-20 18:22:22",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 32,
              "room_type_id": 9,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:21",
              "updated_at": "2020-04-20 18:22:21",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 28,
              "room_type_id": 9,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:20",
              "updated_at": "2020-04-20 18:22:20",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 29,
              "room_type_id": 9,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:20",
              "updated_at": "2020-04-20 18:22:20",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 26,
              "room_type_id": 10,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:19",
              "updated_at": "2020-04-20 18:22:19",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 23,
              "room_type_id": 10,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:19",
              "updated_at": "2020-04-20 18:22:19",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 20,
              "room_type_id": 10,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:18",
              "updated_at": "2020-04-20 18:22:18",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 19,
              "room_type_id": 10,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:17",
              "updated_at": "2020-04-20 18:22:17",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 17,
              "room_type_id": 11,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:16",
              "updated_at": "2020-04-20 18:22:16",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 14,
              "room_type_id": 11,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:15",
              "updated_at": "2020-04-20 18:22:15",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 11,
              "room_type_id": 11,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:13",
              "updated_at": "2020-04-20 18:22:13",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 10,
              "room_type_id": 11,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:13",
              "updated_at": "2020-04-20 18:22:13",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 8,
              "room_type_id": 12,
              "room_status_id": 8,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:12",
              "updated_at": "2020-04-20 18:22:12",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 5,
              "room_type_id": 12,
              "room_status_id": 5,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:11",
              "updated_at": "2020-04-20 18:22:11",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 2,
              "room_type_id": 12,
              "room_status_id": 2,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:10",
              "updated_at": "2020-04-20 18:22:10",
              "deleted_at": null
            },
            {
              "clean_room_skill_level_id": 1,
              "room_type_id": 12,
              "room_status_id": 1,
              "clean_skill_level": 0,
              "created_at": "2020-04-20 18:22:10",
              "updated_at": "2020-04-20 18:22:10",
              "deleted_at": null
            }
          ],
          "message": "Success",
          "code": "200",
          "errors": [],
          "items": {
            "room_type_item": [
              {
                "room_type_id": 12,
                "room_type_code": "WA5",
                "room_type_name": "和モダンA（定員5）",
                "room_type_name_kana": "ワモダンA",
                "room_type_short_name": "和モダンA",
                "row_order": 1
              },
              {
                "room_type_id": 11,
                "room_type_code": "WA4",
                "room_type_name": "和モダンA（定員4）",
                "room_type_name_kana": "ワモダンA",
                "room_type_short_name": "和モダンA",
                "row_order": 2
              },
              {
                "room_type_id": 10,
                "room_type_code": "WB7",
                "room_type_name": "和モダンB（定員7）",
                "room_type_name_kana": "ワモダンB",
                "room_type_short_name": "和モダンB",
                "row_order": 3
              },
              {
                "room_type_id": 9,
                "room_type_code": "TW3",
                "room_type_name": "ツインルーム",
                "room_type_name_kana": "ツインルーム",
                "room_type_short_name": "ツイン",
                "row_order": 4
              },
              {
                "room_type_id": 8,
                "room_type_code": "BB3",
                "room_type_name": "ベビー＆キッズルーム",
                "room_type_name_kana": "ベビー&キッズルーム",
                "room_type_short_name": "ベビー＆",
                "row_order": 5
              },
              {
                "room_type_id": 7,
                "room_type_code": "UN5",
                "room_type_name": "ユニバーサル",
                "room_type_name_kana": "ユニバーサル",
                "room_type_short_name": "ユニバ",
                "row_order": 6
              },
              {
                "room_type_id": 6,
                "room_type_code": "SW6",
                "room_type_name": "スイート",
                "room_type_name_kana": "スイート",
                "room_type_short_name": "スイート",
                "row_order": 7
              },
              {
                "room_type_id": 5,
                "room_type_code": "Z01",
                "room_type_name": "和室10畳【進】",
                "room_type_name_kana": "ワシツ10",
                "room_type_short_name": "和室",
                "row_order": 9
              },
              {
                "room_type_id": 4,
                "room_type_code": "Z05",
                "room_type_name": "和室12.5畳【進】",
                "room_type_name_kana": "ワシツ12.5",
                "room_type_short_name": "和室",
                "row_order": 10
              },
              {
                "room_type_id": 3,
                "room_type_code": "Z02",
                "room_type_name": "ツインベッド【進】",
                "room_type_name_kana": "ツインルーム",
                "room_type_short_name": "ツイン",
                "row_order": 11
              },
              {
                "room_type_id": 2,
                "room_type_code": "Z03",
                "room_type_name": "露天風呂付き和室【進】",
                "room_type_name_kana": "ロテンツキワシツ",
                "room_type_short_name": "露天付",
                "row_order": 12
              },
              {
                "room_type_id": 1,
                "room_type_code": "Z04",
                "room_type_name": "半露天付き和室【進】",
                "room_type_name_kana": "ハンロテンツキワシツ",
                "room_type_short_name": "半露天",
                "row_order": 13
              }
            ],
            "room_status_item": [
              {
                "room_status_id": 1,
                "room_status_code": "V",
                "room_status_name": "空室",
                "clean_use": 1,
                "row_order": 1,
                "room_status_label": "空室清掃"
              },
              {
                "room_status_id": 2,
                "room_status_code": "S",
                "room_status_name": "滞在",
                "clean_use": 1,
                "row_order": 2,
                "room_status_label": "滞在清掃"
              },
              {
                "room_status_id": 5,
                "room_status_code": "O",
                "room_status_name": "出発済",
                "clean_use": 1,
                "row_order": 5,
                "room_status_label": "出済清掃"
              },
              {
                "room_status_id": 8,
                "room_status_code": "X",
                "room_status_name": "故障",
                "clean_use": 1,
                "row_order": 8,
                "room_status_label": "故障清掃"
              }
            ]
          }
        }
}
    beforeEach(() => {
        vuetify = new Vuetify()
        store.dispatch = jest.fn()
        store.dispatch.mockResolvedValue(res)
        wrapper = mount(WorkLoadMasterList, {
            store,
            localVue,
            vuetify,
            i18n,
            validate,
            sync:false,        
        }) 

    })
    const actions = {
        actionClick: jest.fn(),
        actionInput: jest.fn()
    }
    it('test action click ',async () =>{
        wrapper.vm.getList()
        expect(wrapper.find('.text-start').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator__content').exists()).toBeTruthy()
        wrapper.find('.v-small-dialog__activator').trigger('click')   
    });
    it('test action press key board',async () =>{
        wrapper.vm.getList()
        expect(wrapper.find('.text-start').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator__content').exists()).toBeTruthy()
        wrapper.find('.v-small-dialog__activator').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.v-text-field__slot').exists()).toBeTruthy()
        wrapper.find('.v-btn__content').trigger('press',{key:'Enter'})
    });
    it('test action click cancel',async () =>{
        wrapper.vm.getList()
        expect(wrapper.find('.text-start').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator__content').exists()).toBeTruthy()
        wrapper.find('.v-small-dialog__activator').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.v-small-dialog__actions').exists()).toBeTruthy()
        expect(wrapper.findAll('.v-btn__content').at(0).exists()).toBeTruthy()
        wrapper.find('.v-btn__content').trigger('click')
    });
    it('test action click save',async () =>{
        wrapper.vm.getList()
        expect(wrapper.find('.text-start').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator').exists()).toBeTruthy()
        expect(wrapper.find('.v-small-dialog__activator__content').exists()).toBeTruthy()
        wrapper.find('.v-small-dialog__activator').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.v-small-dialog__actions').exists()).toBeTruthy()
        expect(wrapper.findAll('.v-btn__content').at(1).exists()).toBeTruthy()
        wrapper.find('.v-btn__content').trigger('click')
        
    });
    
})