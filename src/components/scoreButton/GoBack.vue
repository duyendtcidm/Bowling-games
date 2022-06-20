<template>
    <div>
        <button class="goBackbtn" @click="goBack"></button>
    </div>
</template>

<script>
    export default {
        name: 'GoBack',
        props: ['frameScore'],
        data () {
            return {
                newFrameScore: [],
                currentScore: 0,
                count: 0,
            }
        },
        methods: {
            goBack() {
                this.newFrameScore = this.frameScore
                this.newFrameScore.pop()                
                this.count = this.newFrameScore.length
                return this.$emit('goBackStep', this.count, this.newFrameScore)
            }
        }
    }
</script>

<style lang="scss" scoped>
.goBackbtn {
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 3px;
    margin-right: 10px;
    -webkit-mask-image: url('../../assets/icons/1-keyboard_return.svg');
    mask-image: url('../../assets/icons/1-keyboard_return.svg');
    -webkit-mask-size:cover;
    mask-size:cover;
    background-color: rgb(233, 72, 32);
    cursor:pointer;
    cursor:pointer;
    border: none;

}
</style>