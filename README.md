# LoaderPage
Loader Page for wait the response of RESTFul

This directive uses the library (https://angular-ui.github.io/bootstrap/#/progressbar) and I implemented a service where according to the REST service response manages the message and type of outcome.

How work it???

It all starts when I click the button, and inside there is the directive by a code passed as a parameter.
It is called the directive that listens where it takes the code and issue to the html page that displays the loader.
At the same time the page loads, the controller prepares the message from the map and taking the rest of the button controller makes a call where according to response manages the message code to be included in it.
Once complete a message appears on success or error message in case of ON ERROR.
Finally appears the button to go back.
