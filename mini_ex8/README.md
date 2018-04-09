https://rawgit.com/JesperVendelbo/mini_ex/master/mini_ex8/empty-example/index.html (if the program doesn't run, then click on the lock in the search bar in the browser (Firefox) and allow an unsecure connection.)

![alt text](https://github.com/JesperVendelbo/mini_ex/blob/master/mini_ex8/Sk%C3%A6rmbillede%202018-04-09%20kl.%2022.18.00.png)

This mini_ex has been made in collaboration with Mark Nielsen and Thomas Matthiesen. When we tried to figure out what API to implement into our program, we were looking for simple API’s as e.g. a weather forecast. But then We found one that can position Mercury, Venus, Earth, Mars and Jupiter in every position they’ve had since year 0. For our program we have only used the different positions down until year 1900 and then up until 2050.
Our program gets these positions of the planets as a x-, y- and a z-position from the API and in that way forms a 3D visualisation. This is the API we have used http://www.astro-phys.com/api. So our program can show the positions of the 5 planets for every month since 1900.

At first it was quite confusing on the http://www.astro-phys.com/api website and not that user friendly for a first timer trying to implement an API. E.g. we had some difficulties trying to get data for more than one planet at a time. It turned out the problem was as simple as just adding the other planets to the url. So insted of this url: /api/de406/states?date=1000-1-20&bodies=mars we just had to add the other planets behind like: bodies=mercury,venus, earth,mars,jupiter.

In relation to how API’s works on especially social media I would like to bring this qoute from the Jonathan Albright text:
"Facebook’s Graph API was a revolution in large-scale data provision. It converted people and their likes, connections, locations, updates, networks, histories, and extended social networks into — quite literally — “objects.” It made the company’s offerings and the data its users generated more economically viable." (Albright 2018). I think this is quite remarkable and a brilliant thing the inventers of Facebook did by creating this API. All the things people do on-line using Facebook are stored, and then Facebook can sell the data they’ve got on us. But then again it’s also quite scary to think about how data about you is being used everywhere to get money from me by looking at commercials just for me e.g.

If I were to work with API’s again I would like to get a better understand of how the specific API’s for the big social medias are working.
