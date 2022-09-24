song1 = ""
song2 = ""
function setup() {
    canvas = createCanvas(600,500)
    canvas.position(500,150)
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.poseNet(video, modeloaded) 
    classifier.on("pose",gotresult)

    }
    function draw() {
        image(video,0,0,600,500 )
    }
    function preload(){
        song1 = loadSound("09-Peter_Pan-Victory_song.mp3")
        song2 = loadSound("Harry Potter Theme Song.mp3")
    }