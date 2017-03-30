var pics = ["https://s-media-cache-ak0.pinimg.com/564x/67/ba/f6/67baf623155ca9f55bd501f8ced637a9.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/1d/28/7d/1d287d08903e8cc1be98f661e4321953.jpg",
            "http://studyabroad.pk/images/stanforduniversity-video-tour.jpg",
            "http://cdn.hercampus.com/s3fs-public/2016/11/19/bruween.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/88/c7/05/88c705ebb72a9800fa192de044082ab4.jpg",
            "http://bayimages.net/images/25k/bay024408.jpg"     
           ];

var divLocation = 0;

function goLeft(){
  
  
  if(divLocation >= 0){
    divLocation = divLocation - 1;
    document.getElementById("pic").src=pics[divLocation];
  }
}

function goRight(){
  
  
  if(divLocation < pics.length){
    divLocation = divLocation + 1;
    document.getElementById("pic").src=pics[divLocation];
  }
}