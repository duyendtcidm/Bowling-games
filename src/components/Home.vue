<template>
  <div id="homepage">
    <HeaderPart />
    <div class="scoreChoices">
      <ScoreLevel :currentScorePre="currentScore" :countPre="count" @currScoreUpdate="scoreUpdate" />
      <RandomScore :currentScorePre="currentScore" :countPre="count" @randScoreUpdate="randUpdate" />
      <GoBack :frameScore="frameScore" @goBackStep="goBackUpdate" />
    </div>    
    <FrameScore :list="listFrame" :frameScore="frameScore" />
    <NewGame @newGameUpdate="newGameUpdate" />
    <GettingStart />
  </div> 
</template>

<script>
import HeaderPart from './Header.vue'
import ScoreLevel from './scoreButton/ScoreLevel.vue'
import FrameScore from './frames/Frame.vue'
import RandomScore from './scoreButton/Random.vue'
import NewGame from './scoreButton/NewGame.vue'
import GoBack from './scoreButton/GoBack.vue'
import GettingStart from './GettingStart.vue'

export default {
  name: 'App',
  components: {
    HeaderPart,
    ScoreLevel,
    FrameScore,
    RandomScore,
    GoBack,
    GettingStart,
    NewGame,
  },
  data() {
    return {
      listFrame: [1,2,3,4,5,6,7,8,9,10],
      currentScore: 0,
      count: 0,
      frameScore: [],      
    }
  },
  methods: {
    scoreUpdate(score, count) {
      if (this.frameScore.length < 21 ) {
        this.frameScore.push(score)
        this.currentScore = score
        this.count = count
      }        
    },
    randUpdate(currentScore, count) {
      if (this.frameScore.length < 21 ) {
        this.frameScore.push(currentScore)
        this.currentScore = currentScore
        this.count = count
        // console.log(`Current list score---: ${this.frameScore}`)
      }        
    }, 
    goBackUpdate(count) {
      this.count = count
      this.currentScore = this.frameScore.slice(-1)
    }, 
    newGameUpdate(count, newFrameScore) {
      this.count = count
      this.frameScore = newFrameScore
    },
  }  
}
</script>

<style lang="scss" scoped>
#homepage {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to left, #210246, #c713a9c5, #FFC312);
}
.scoreChoices{
  display: flex;
  width: 840px;
  margin: auto;
  // padding: 10px 0 10px 0;
}
</style>