Single Page App showing the next five races from an API

Used Context to fetch and make race data available application wide.

  Changes I made: 
  I decided that because each race starts on the minute, the most often I would ever need to make another api call was once a minute.
  I removed the countdown clock from context which prevents rendering the rest of context every second and now the clock only renders itself in a component called Countdown. 
  I built a custom hook called useRefreshTime which is passed an interval and then returns the time at that interval. I used this to get the time only in components that need it. The advantage of the hook is that for the clock and countdown I set the interval to 1000ms. But for the api call its set to 60000ms (1 min). 

  These changes have solved 
  - excessive api calls
  - excessive rendering
  - the bug that caused glitching every second (I don't think there's anything stopping them from still switching every minute when it's called though. To fix that I'll return sorted data instead of leaving it unsorted)

  Remaining problems 
  - Because I only update the clocks every second and because I use the custom hook within the different components I'm left with clocks that update every second but not at the SAME POINT every second. So the countdown clocks and the actual time don't line up exactly. 
  - As mentioned above. I haven't sorted the data
