<template>
    <div>
        <button class="newGamebtn" @click="newGame">New Game</button>
    </div>
</template>

<script>
    export default {
        name: 'NewGame',
        data () {
            return {
                newFrameScore: [],
                count: 0,
            }
        },
        methods: {
            newGame() {
                this.count = 0
                this.newFrameScore = []
                return this.$emit('newGameUpdate', this.count, this.newFrameScore)
            }
        }
    }
</script>

<style lang="scss" scoped>
.newGamebtn {
    width: 180px;
    height: 40px;
    font-size: 18px;
    border: none;
    color: #ccc;
    font-weight: 900;
    border-radius: 3px;
    margin-right: 10px;
    margin-top: 10px;
    background-color: rgb(17, 128, 231);
    cursor:pointer;
}

.newGamebtn:hover {
    background-color: rgb(32, 136, 233);
    color: black;
    transition: ease-in-out 0.7s;
}
</style>