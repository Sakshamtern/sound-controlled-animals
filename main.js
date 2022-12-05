function StartIdentification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XCJnUSFgc/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var cat = 0;
var dog = 0;
var cow = 0;

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    } else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        

        document.getElementById("result_label").innerHTML = 'I can hear-' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("times_audio_is_played_dog").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("times_audio_is_played_cat").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("times_audio_is_played_cow").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('dog');
        img2 = document.getElementById('cow');
        img3 = document.getElementById('cat');
        img4 = document.getElementById('ear');

        if(results[0].label == "dog" )
        {
            img1.src = 'dog-barking.gif';
            document.getElementById("times_audio_is_played_dog").innerHTML = dog + 1;
            img2.src = 'cow.png';
            img3.src = 'cat.png';
            
        } else if(results[0].label == "cow" )
        {
            img1.src = 'dog.png';
            img2.src = 'cow-mooing.gif';
            document.getElementById("times_audio_is_played_cow").innerHTML = cow + 1;
            img3.src = 'cat.png';
        }
        else if(results[0].label == "cat" )
        {
            img1.src = 'dog.png';
            img2.src = 'cow.png';
            img3.src = 'cat-meowing.gif';
            document.getElementById("times_audio_is_played_cat").innerHTML = cat + 1;
        }

        else 
        {
            img1.src = 'dog.png';
            img2.src = 'cow.png';
            img3.src = 'cat.png';
            img4.src = 'ear.gif';
        }

    }


}
