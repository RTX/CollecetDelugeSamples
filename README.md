# Collect Songs Samples for Synthstrom Deluge v 2.0.x 

<br>
A few days ago I had some problems with my SD <br>
When i recovered it my songs had missing samples   :( <br>

So iv decided to write a small node script to find missing samples in my song
<br><br> 
eventually it came to be a collect samples script 


## So what it does :)

*   go threw the SONGS folder 
*   create a new Song folder for each inside /SAMPLES/COLLECTED/ folder
*   copy all the samples for each song in to the new song folder inside /SAMPLES/COLLECTED/ 
    <br>for example /SAMPLES/COLLECTED/SONG000
*   create a new song file with the new samples path in the same folder 
*   create a Missing.txt file in the same folder that contains missing files if there are any 

<br>

## Download executable

Download the suitable executable form 

https://github.com/RTX/CollectDelugeSamples/blob/master/Builds.md


### Run
Open a terminal window 
Go to the folder you place your downloaded cellect executable 

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
### Copy the new Songs and folders to Deluge SD 

* make sure you copy also the COLLECTED folder 

* rename the song files and copy them to the SONGS folder 
* folow the song name structure <br> start with SONG, 3 Digits And can Optional A to Z at the end of the file name for Versions 
<br>for example SONG000A.XML 


The script will not change any of the Deluge filse or your songs 
its just making a copy of every sample contained in the song 



there are probebly some bugs here and there 
please go ahead and make this code better :) 

Thanks Synthstrom 
https://synthstrom.com/product/deluge/
