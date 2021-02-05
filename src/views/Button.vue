<template>
<div>
    <div class="row">
        <cl-button @click="handleClick">按钮</cl-button>
        <cl-button round>按钮</cl-button>
        <cl-button disabled>按钮</cl-button>
    </div>

    <div class="row">
        <cl-button type="primary">primary</cl-button>
        <cl-button type="success">success</cl-button>
        <cl-button type="warning">warning</cl-button>
        <cl-button type="danger">danger</cl-button>
        <cl-button type="info">info</cl-button>
    </div>

    <div class="row">
        <cl-button plain type="primary">primary</cl-button>
        <cl-button plain type="success">success</cl-button>
        <cl-button plain type="warning">warning</cl-button>
        <cl-button plain type="danger">danger</cl-button>
        <cl-button plain type="info">info</cl-button>
    </div>

    <div class="row">
        <cl-button type="primary" disabled>primary</cl-button>
        <cl-button type="success" disabled>success</cl-button>
        <cl-button type="warning" disabled>warning</cl-button>
        <cl-button type="danger" disabled>danger</cl-button>
        <cl-button type="info" disabled>info</cl-button>
    </div>

    <div class="row">
        <cl-button plain type="primary" disabled>primary</cl-button>
        <cl-button plain type="success" disabled>success</cl-button>
        <cl-button plain type="warning" disabled>warning</cl-button>
        <cl-button plain type="danger" disabled>danger</cl-button>
        <cl-button plain type="info" disabled>info</cl-button>
    </div>

    <div class="row">
        <cl-button size="medium">medium</cl-button>
        <cl-button size="small">small</cl-button>
        <cl-button size="mini">mini</cl-button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Button',

    data() {
        return {

        }
    },

    methods: {
        handleClick() {
            console.log(111)
        }
    }
}
</script>
