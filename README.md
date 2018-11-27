# Collect Songs Samples for Synthstrom Deluge v 2.0.x 


The currant status is that deluge uses the same samples folder for all songs, if you try to change a sample location you might end up with missing files in your songs 
<br><br>
Im sure "Collect Song" will be part of deluge next Versions :) 
but for now... 
<br>
Iv decided to write a small node script to find missing samples in my song / Samples
<br><br> 
eventually it came to be a collect samples script 
<br><br>


## So what it does :)

*   go threw the SONGS folder 
*   for each song, i create a new Song folder inside /SAMPLES/COLLECTED/ 
*   copy all the samples for each song in to the new song folder inside /SAMPLES/COLLECTED/ 
    <br>for example /SAMPLES/COLLECTED/SONG000
*   create a new song file with the new samples path in the same folder 
*   create a Missing.txt file in the same folder that contains missing files if there are any 

<br>

## Download executable

Download the suitable executable form [HERE](https://github.com/RTX/CollectDelugeSamples/blob/master/Builds.md)
<br>

## Backup Deluge SD 

Make a local copy of deluge SD card on your computer
At this point i strongly suggest you do it on a local copy !!!!

******** You can work directly on the SD card on your own risk ********
<br>

### Run
Open a terminal window 
Nevigate to the downloaded cellect executable location .... 

Run executable with the path to your deluge local SD copy 

MAC 
```{r, engine='bash', count_lines}
    $ ./collect-macos  C:\Downloads\DelugeRootFolder
   
```
LINUX 
```{r, engine='bash', count_lines}
    $ ./collect-linux  C:\Downloads\DelugeRootFolder
   
```

WIN

```{r, engine='bash', count_lines}
    $ collect-win  C:\Downloads\DelugeRootFolder
   
```


## When procces is done 
### Copy the new songs and folders to Deluge SD 

* make sure you copy also the COLLECTED folder 

* rename the song files and copy them to the SONGS folder 
* folow the song name structure <br> start with SONG, 3 Digits And can Optional A to Z at the end of the file name for Versions 
<br>for example SONG000A.XML 


The script will not change any of the Deluge filse or your songs 
its just making a copy of every sample contained in the song 



there are probebly some bugs here and there 
please go ahead and make this code better :) 

Thanks Synthstrom <br>
https://synthstrom.com/product/deluge/
