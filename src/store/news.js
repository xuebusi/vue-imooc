import { defineStore } from 'pinia'

export const useNewsStore = defineStore('newsStore', {
    state() {
        return {
            newsList: [{
                id: 1,
                title: '今天天气怎么样？',
                content: '阴转多云，有小雨。'
            }, {
                id: 2,
                title: '明天放假去哪里玩？',
                content: '北京天安门逛逛！'
            }, {
                id: 3,
                title: '你在学习什么技术？',
                content: 'Vue3和TypeScript技术！'
            }]
        }
    }
})