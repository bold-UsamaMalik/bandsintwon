# bandsintwon
Single page web app that provides the details about artist and his/her events

Architecture:

1- App takes Artist's name as input from user                       
  a- user can simply write the name in search box                                           
  b- user can search by speaking the name of arist                  


2- This input is then forwarded to the linked API to fetch the details of artist
3- navigating to events route as declared in the react router.
4- User can select the duration of the events interested by selecting from the duration tag as "all-time", "past", "upcoming"
      
5- the onclick below on the artist will navigate us to the event page with all the events.
6- Have implemented inmemory cache which will find the artist if it exists in cache otherwise it gets it from api.

  
