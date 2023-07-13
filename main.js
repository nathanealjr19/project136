status = "";

function setup(){
    canvas = createCanvas(380,380)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(380,380)
    video.hide()
  }

  function start(){
        objectDetector = ml5.objectDetector('cocossd', modelLoaded)
        document.getElementById("status").innerHTML = "Status : Detecting Objects"
        document.getElementById("name_of_objects").value
      }

      function modelLoaded(){
        console.log("model Loaded!")
        status = true
      }

      function draw(){
        image(video, 0, 0, 380, 380)
      }