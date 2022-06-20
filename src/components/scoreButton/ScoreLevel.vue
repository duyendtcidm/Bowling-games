<template>
    <div class="listScore">
        <div v-for="score in currListScore" :key="score">
            <button  class="scoreLevel" @click="currScore(score)"> {{ score}} </button>
        </div>       
    </div>
</template>

<script>
    export default {
        name: 'ScoreLevel',
        props: ['currentScorePre', 'countPre'],
        data() {
            return {
                newLevelScore: [],
                count: 0,
                currentScore: 0,
                maxScore: 10,
            }
        },
        methods: {
            currScore(score) {
                this.count = this.countPre + 1
                if (this.count %2 !== 0) {
                    this.currentScore = score
                } else {
                    this.currentScore = 0
                }
                this.$emit('currScoreUpdate', score, this.count)
            }
        },
        computed: {
            currListScore() {
                if (this.countPre %2 === 0 || (this.count === 19 && this.currentScorePre === 10) || this.count=== 21) 
                    return [...Array(this.maxScore+1).keys()]
                else 
                    return [...Array(this.maxScore-this.currentScorePre+1).keys()]
            }
        }
    }
</script>

<style lang="scss" scoped>
.scoreLevel {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #4c98af46 ;
    cursor: pointer;
    transition: 0.3s ease-out;
}

.scoreLevel:hover {
    color: rgb(65, 8, 8);
    background-color: rgb(210, 231, 133);

  transition: 0.2s;
}

.listScore {
    margin: 10px auto;
    position: relative;
    left: -100px;
    width: 550px;
    display: flex;
}
</style>