<template>
<div class="word">
    <header>
        <div class="rythm-bass">Bass</div>
        <div class="rythm-medium">Medium</div>
        <div class="rythm-high">High</div>
        <div class="rythm-neon">neon</div>
        <div class="rythm-neon2">neon2</div>
        <div class="borderColor">borderColor</div>
        <div class="blur">blur reverse</div>
        <div class="blur2">blur</div>
        <div class="swing">swing curve up</div>
        <div class="swing2">swing left</div>
        <div class="swing3">swing radius</div>
        <p>radius</p>
        <div class="color">
            <div class="radius" style="border: 2px solid #f00;margin-right:10px;"> </div>
            <div class="radius1" style="border: 2px solid #f00"></div>
        </div>
        
        <p>Background-Color</p>
        <div class="color">
            <div class="color1"></div>
            <div class="color2"></div>
            <div class="color3"></div>
        </div>
    </header>

    <!-- <section>
        <div class="btn start" @click="onType('pulse')">
            pulse
        </div>
        <div class="btn stop" @click="onType('jump')">
            jump
        </div>
        <div class="btn microphone" @click="onType('shake')">
            shake
        </div>
        <div class="btn microphone" @click="onType('twist')">
            twist
        </div>
        <div class="btn microphone" @click="onType('shake')">
            vanish
        </div>
        <div class="btn microphone" @click="onType('kern')">
            kern
        </div>
        <div class="btn microphone" @click="onType('neon')">
            neon
        </div>
        <div class="btn microphone" @click="onType('radius')">
            radius
        </div>
    </section> -->
    <footer>
        <div class="btn start" @click="onStart">
            start
        </div>
        <div class="btn stop" @click="onStop">
            stop
        </div>
        <!-- <div class="btn microphone" @click="onUseMicrophone">
            Use Microphone
        </div> -->
    </footer>
</div>
</template>

<script>
// github: https://github.com/Okazari/Rythm.js
// demo: https://okazari.github.io/Rythm.js/
import Rythm from 'rythm.js'
export default {
    data() {
        return {
            rythm: '',          // Rythm实例
            value: 0.75,
            type: 'shake'
        };
    },
    mounted() {
        this.rythm = new Rythm()
        // Scale = startingScale+(pluseRatio*currentPulse)
        this.rythm.startingScale = this.value   // starting scale is the minimum scale your element will take,default:0.75
        this.rythm.pulseRatio = 0.3	                // pulse ratio is be the maximum additional scale your element will take default 0.3
        // bass 0-10 ; medium 150-40 ; high 500-100
        this.rythm.addRythm('rythm-neon', 'neon', 0, 10)
        this.rythm.addRythm('rythm-neon2', 'neon', 0, 10, {
            from: [0,0,255],
            to:[255,0,255]
        })
        this.rythm.addRythm('borderColor', 'borderColor', 0, 10, {
            from: [0,0,255],
            to:[255,0,255]
        })
        this.rythm.addRythm('blur', 'blur', 0, 10, {
            reverse: true
        })
        this.rythm.addRythm('blur2', 'blur', 0, 10)

        this.rythm.addRythm('swing', 'swing', 0, 10, {
            curve: 'up',
        })
        this.rythm.addRythm('swing2', 'swing', 0, 10, {
            direction: 'left',
        })
        this.rythm.addRythm('swing3', 'swing', 0, 10, {
            radius: 10
        })
        this.rythm.addRythm('radius', 'radius', 0, 10, {
            min: 0,
            max: 30
        })
        this. rythm.addRythm('color1', 'color', 0, 10)
        this. rythm.addRythm('color2', 'color', 0, 10, {
            from: [0,0,255],
            to:[255,0,255]
        })
        this. rythm.addRythm('color3', 'color', 0, 10, {
            from: [255,255,0],
            to:[255,0,0]
        })

        this.rythm.addRythm('radius1', 'radius', 0, 10, {
            reverse: true,
            min: 0,
            max: 30
        })
        this.rythm.setMusic(require('./assets/love.mp3'))
        
    },
    methods: {
        onStart() {
            this.rythm.start()
        },
        onStop() {
            this.rythm.stop('freeze')
        },
        onUseMicrophone() {
            console.log('microphone')
            const that = this
            this.rythm.plugMicrophone().then(() => {
                that.onStart()
                that.onType()
            })
        }
    }
};
</script>

<style lang="less">
    header{
        width: 84%;
        font-size: 20px;
        padding: 0 8% !important;
        padding-bottom: 40px;
        div{
            max-width: 150px;
            height: 50px;
            line-height: 50px;
            margin-bottom: 10px;
            border: 3px solid #fff;
        }
        .color{
            display: flex;
            div{
                width: 50px;
                height: 50px;
                border-radius: 4px;
            }
        }
    }
    section{
        display: flex;
        width: 100%;
        position: fixed;
        justify-content: center;
        bottom: 60px;
        flex-wrap: wrap;
        .btn{
            padding: 3px 5px;
            font-size: 14px;
            border-radius: 4px;
            margin: 5px;
        }
        .start{
            color: limegreen;
            border: 1px solid limegreen;
        }
        .stop{
            color: indianred;
            border: 1px solid indianred;
        }
        .microphone{
            color: cadetblue;
            border: 1px solid cadetblue;
        }
    }
    footer{
        display: flex;
        width: 100%;
        position: fixed;
        justify-content: center;
        bottom: 10px;
        .btn{
            padding: 3px 5px;
            font-size: 14px;
            border-radius: 4px;
            margin: 0 5px;
        }
        .start{
            color: limegreen;
            border: 1px solid limegreen;
        }
        .stop{
            color: indianred;
            border: 1px solid indianred;
        }
        .microphone{
            color: cadetblue;
            border: 1px solid cadetblue;
        }
    }
</style>
