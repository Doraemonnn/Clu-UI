<template>
<div>
    <!-- 导航 -->
    <ul class="home-mav">
        <li :class="{active: index == itemIndex}" v-for="(item, index) in navList" :key="index" @click="toPage(item, index)">{{item.label}}</li>
    </ul>

    <!-- 组件 -->
    <div class="home-content">
        <router-view />
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',

    data() {
        return {
            itemIndex: 0,
            navList: [{
                label: '按钮',
                name: 'button',
                path: '/button'
            }, {
                label: '弹框',
                name: 'modal',
                path: '/modal'
            }, {
                label: '树形控件',
                name: 'tree',
                path: '/tree'
            }]
        }
    },

    methods: {
        // 导航
        toPage(item, index) {
            this.$router.push({
                name: item.name
            })
            this.itemIndex = index;
        }
    }
}
</script>
