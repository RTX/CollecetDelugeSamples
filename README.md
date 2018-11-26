# Collect Songs Samples for Synthtrom Deluge v 2.0.x 

<br>
So a few days ago I had some problems with my SD 
When i recovered it i had missing samples in my songs:( 

. so i decided to write a small node script to find missing samples in my song 
eventually it came to be a collect samples script 

## What it does :)
*   go threw the SONGS folder 
*   create a new Song folder for each inside /SAMPLES/COLLECTED/ folder
*   copy all the samples for each song in to the new song folder inside /SAMPLES/COLLECTED/ 
**  for example /SAMPLES/COLLECTED/SONG000
*   create a new song file with the new samples path in the same folder 
*   create a Missing.txt file in the same folder that contains missing files if there are any 

<br>

## Howto ... 

### Install Node 
Make sure you have nodejs installed on your computer 
You can find nodejs installer here : https://nodejs.org/en/download/

### Clone  
clone this repo to your local drive 

### Backup
Make a local copy of deluge SD card on your computer
At this point i strongly suggest you do it on a local copy !!!!

******** You can work directly on the SD card on your own risk ********

### Run
Open a terminal window 
Go to the cloned folder 
Run the app.js file with the path to the  Deluge RootFolder  
```{r, engine='bash', count_lines}
    $ node app.js  C:\Downloads\DelugeRootFolder
   
```

OR

```{r, engine='bash', count_lines}
    $ node app.js  /volume/deluge
   
```


## You can copy the new song files to deluge SD 
### Copy also the COLLECTED folder 
### rename the file and make sure you folow the song name structure 
*
### it must start with SONG 3 Digits And can be A to Z at the end of the file name 
### for example SONG000A.XML 
*

The script dosnt change any of the Deluge filse or your songs 
its just making a copy of every sample contained in the song 

im sure there are some bugs here and there 
please go ahead and make this code better :) 
