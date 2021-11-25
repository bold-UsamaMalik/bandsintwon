# bandsintwon
Single page web app that provides the details about artist and his/her events

Architecture:

<p> 1 : App takes Artist's name as input from user <p>
<br>  
<p>- user can simply write the name in search box<p>                                           
<p>- user can search by speaking the name of arist<p>                  
<br>
2 : This input is then forwarded to the linked API to fetch the details of artist<p>
<br>
3 : navigating to events route as declared in the react router.<p>
<br>
4- User can select the duration of the events interested by selecting from the duration tag as "all-time", "past", "upcoming"
<br>        
 <br> 
  5- the onclick below on the artist will navigate us to the event page with all the events.
<br> 
 <br> 
  6- Have implemented inmemory cache which will find the artist if it exists in cache otherwise it gets it from api.

  
