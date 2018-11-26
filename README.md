# Collect Songs Samples for Synthtrom Deluge v 2.0.x 

<br>
So a few days ago I had some problems with my SD 
When i recovered it i had missing samples in my songs:( 

. so i decided to write a small node script to find missing samples in my song 
eventually it came to be a collect samples script 
<br>

## How to use it 

### Install Node 
Make sure you have nodejs installed on your computer 
You can find nodejs installer here : https://nodejs.org/en/download/

### Backup
Put the deluge SD card into your computer

At this point i strongly suggest you do it on a local copy !!!!
You can either work directly on the SD card on your own risk 

### Run
Open a terminal window and run the app.js file with the path to the  Deluge RootFolder copy you made 
```{r, engine='bash', count_lines}
    $ node app.js  C:\Downloads\DelugeRootFolder
   
```
