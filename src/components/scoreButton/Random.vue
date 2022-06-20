<template>
    <div>
        <button class="randombtn" @click="randScore()"></button>
    </div>
</template>

<script>
    export default {
        name: 'RandomScore',
        props: ['currentScorePre', 'countPre'],
        data () {
            return {
                count: 0,
                currentScore: 0
            }
        },
        methods: {
            randScore() {
                this.count = this.countPre+1;
                // console.log(`Current count: ${this.count}`)
                if (this.count %2 !== 0) 
                    this.currentScore = Math.floor(Math.random() * 11)
                else 
                    this.currentScore = Math.floor(Math.random() * (11-this.currentScorePre))
                
                this.$emit( 'randScoreUpdate', this.currentScore, this.count)
            }
        }
    }
</script>

<style lang="scss" scoped>
.randombtn {
    width:28px;
    height:28px;
    border: none;
    border-radius: 3px;
    margin-right: 10px;
    -webkit-mask-image: url('../../assets/icons/3-shuffle.svg');
    mask-image: url('../../assets/icons/3-shuffle.svg');
    -webkit-mask-size:contain;
    mask-size:contain;
    background-color: rgb(233, 72, 32);
    cursor:pointer;
}
</style>