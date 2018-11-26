# Collect Songs Samples for Synthtrom Deluge v 2.0.x 

<br>
So a few days ago I had some problems with my SD 
When i recovered it i had missing samples in my songs:( 

. so i decided to write a small node script to find missing samples in my song 
eventually it came to be a collect samples script 

## What it does :)
*   go threw the SONGS folder 
*   create a new Song folder inside /SAMPLES/COLLECTED/ folder
*   copy all the samplesfor each song in to his folder
*   create a new song file with the new samples path in the same folder 
*   create a Missing.txt file in the same folder that contains missing files if there are any 

<br>

## Howto ... 

### Install Node 
Make sure you have nodejs installed on your computer 
You can find nodejs installer here : https://nodejs.org/en/download/

### Backup
Make a local copy of deluge SD card on your computer
At this point i strongly suggest you do it on a local copy !!!!

******** You can work directly on the SD card on your own risk ********

### Run
Open a terminal window and run the app.js file with the path to the  Deluge RootFolder  
```{r, engine='bash', count_lines}
    $ node app.js  C:\Downloads\DelugeRootFolder
   
```

OR

```{r, engine='bash', count_lines}
    $ node app.js  /volume/deluge
   
```
