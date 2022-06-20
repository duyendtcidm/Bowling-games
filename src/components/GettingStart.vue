<template>
    <div class="startScreen">
        <div class="items-container">
            <div class="ball-container">
                <div class="bowling-pins">
                    <img id="fall-bowling-pin" src="../assets/bowling-pin.svg" alt="bowling icon">
                    <img src="../assets/bowling-pin.svg" alt="bowling icon">
                    <img src="../assets/bowling-pin.svg" alt="bowling icon">
                </div>
                <div class="ball">
                    <div class="hole"></div>
                    <div class="hole"></div>
                    <div class="hole"></div>                
                    <div class="line-shadow"></div>
                </div>
                <!-- <div class="shadow"></div>  -->
                     
            </div>        
        </div>
         
    </div>    
</template>

<script>
    export default {
        name: 'GettingStart',
        methods: {
            homeDirect() {
                return this.$router.push({name: 'Home'})
            }
        }
    }
</script>

<style lang="scss" scoped>
// .startScreen {
//     width: 100%;
//     height: 100vh;
//     background-color: rgba(7, 9, 37, 0.979);
// }

.items-container {
    position: absolute;
    width:100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.ball-container {
    position: relative;
    left: 100px;
    top: 40px;
    width: 300px;
    height: 150px;
    display: flex;
    line-height: 150px;
}
.ball {
    position:absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(255, 72, 0);
    border: solid 1px #000;
    z-index: 10;
    top:55px;
    left: 80px;
}

.ball:hover {
    -webkit-animation: spin .75s infinite;
    -ms-animation: spin .75s infinite;
    -moz-animation: spin .75s infinite;
    animation: spin .75s infinite;
}
.hole{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(16, 17, 12, 0.849);
    position: relative;
}
.hole:nth-child(1) {
    top: 17px;
    left: 45px;    
}
.hole:nth-child(2) {
    top: 20px;
    left: 25px;   
}
.hole:nth-child(3) {
    top: 15px;
    left: 45px;    
}
.line-shadow {
    position: absolute;
    width: 80px;
    height: 80px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid rgba(40,40,40,1);
    border-left: 2px solid transparent;
    border-top: 2px solid transparent;
    border-radius: 50px;
    transform: rotate(295deg);
    top: 10px;
    left: 10px;
}
.shadow {
    width: 100px;
    height: 25px;
    background: rgba(0,0,0,.6);
    border-radius: 100px / 25px;
    margin: -14px auto 0;
    z-index: -1;
}
.bowling-pin {
    height: 100px;
}

#fall-bowling-pin {
    position:absolute;
    transform: rotate(-75deg);
    top: 40px;
}
.startGame {
    width: 200px;
    height: 50px;
    color: rgba(250, 250, 250, 0.836);
    font-family: 'Zen Maru Gothic';
    font-size: 24px;
    border: none;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 20px;
    cursor: pointer;
    background-size: 200%;
    background-image: linear-gradient(to left, #FFC312, #EE5A24, #FFC312);
    transition: 0.6s;
}

.startGame:hover {
    background-position: right;
}

@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@-ms-keyframes spin {
    from { -ms-transform: rotate(0deg); }
    to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}


</style>