Single Page App showing the next five races from an API

Bugs: 
Currently there is a bug whereby it is possible that races that have expired are removed from RaceList and new races aren't refetched before the number of RaceItems goes below 5. 
This could be fixed by making sure to refetch data from the API after a race has been removed. 

