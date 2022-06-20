<template>
    <div class="fullFrame">
        <div class="frame nomal-frame" v-for="frame of nomalFrame" :key="frame">
            <div class="frame-name"> {{frame}} </div>
            <div class="frame-score">
                <div class="first-score">{{frameScore[frame*2-2]}}</div>
                <div class="second-score">{{frameScore[frame*2-1]}} </div> 
            </div>
            <div class="frame-total"> {{ listScore(frame) }} </div>
        </div>
        <div class="frame frame-last" v-for="frame of lastFrame" :key="frame">
            <div class="frame-name"> {{frame}} </div>
            <div class="frame-score">
                <div class="first-score">{{frameScore[frame*2-2]}}</div>
                <div class="second-score">{{frameScore[frame*2-1]}} </div>
                <div class="third-score"> {{ lastCore(frame) }} </div> 
            </div>
            <div class="frame-total"> {{ listScore(frame) }} </div>
        </div>
        <div class="frame frame-last">
            <div class="frame-name"> Total </div>
            <div class="frame-total"> {{ listScore(lastFrame) }} </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'FrameScore',
        props: ['list', 'frameScore'],
        data() {
            return {
                listFrame: this.list,
                totalScore: []              
            }
        },
        methods: {
            listScore(frame) {
                this.totalScore[0] = 0
                let temp = []
                for (let i of this.list) {
                   temp[i] = this.frameScore[i*2-2] + this.frameScore[i*2-1] 
                }
                let i = 1
                while(i <= 9) {
                    if (this.frameScore[i*2-2] === 10) {
                        if (i === 9) {
                            this.totalScore[i] = this.totalScore[i-1] + 10 + temp[i+1]
                        } else if (this.frameScore[i*2] === 10) {
                            if (this.frameScore[i*2+2] === 10) {
                                this.totalScore[i] = this.totalScore[i-1] +30
                            } else {
                                this.totalScore[i] = this.totalScore[i-1] + 20 + this.frameScore[i*2+2]
                            }
                        } else 
                            this.totalScore[i] = this.totalScore[i-1] + 10 + temp[i+1]
                    } else if (temp[i] === 10) {
                         this.totalScore[i] = this.totalScore[i-1] + 10 + this.frameScore[2*i]
                    } else {
                        this.totalScore[i] = this.totalScore[i-1] + temp[i]
                    }
                    i++
                }
                // console.log(`Temp 1->9 ${this.totalScore} i-curr: ${i}`)
                if (i === 10) {
                        if (this.frameScore[2*i-2] === 10) {
                            this.totalScore[i] = this.totalScore[i-1] + temp[i] + this.frameScore[2*i]
                        } else if (temp[i] === 10) {
                            this.totalScore[i] = this.totalScore[i-1] + 10 + this.frameScore[2*i]
                            
                        } else {
                            this.totalScore[i] = this.totalScore[i-1] + temp[i]
                        }
                }
                // console.log(`Total: ${this.totalScore}`)
                if (!isNaN(this.totalScore[frame]))
                    return this.totalScore[frame]
                else
                    return ''
            },

            lastCore(frame) {
                if (this.frameScore[frame*2-2] === 10 || (this.frameScore[frame*2-2]+ this.frameScore[frame*2-1] === 10) )
                    return this.frameScore[frame*2]
                else 
                    return ''
            }
            
        },
        computed: {
            nomalFrame() {
                return this.list.slice(0, -1)
            },
            lastFrame() {
                return this.list.slice(0).splice(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>
.fullFrame {
    margin: 10px auto;
    width: 840px;
    height: 100px;
    display: flex;
    background-color: beige;
}
.frame {
    height: 100px;
    align-items: center;
    border: solid 1px rgb(112, 87, 87);
    text-align: center;
}

.nomal-frame {
    width: 80px;
}

.frame-last {
    width: 120px;
}

.frame-name {
    width: 100%;
    height: 20px;
    padding: 3px;
    font-weight: 700;
    border-bottom: solid 1px rgb(112, 87, 87);
}

.frame-score {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 35px;
}

.frame-score .first-score,.second-score {
    width: 50%;
    height: 40px;
    line-height: 40px;
}

.frame-score .third-score {
    width: 50%;
}

.frame-score .first-score, .second-score:nth-last-child(2){
    border-right: dashed 1.5px rgb(150, 129, 129);
}

.frame-total{
    width: 100%;
    height: 40px; 
    line-height: 40px;
}



</style>