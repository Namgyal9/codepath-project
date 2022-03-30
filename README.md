# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Namgyal Thily**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/codepath-pre-work)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)


If you recorded multiple GIFs for all the implemented features, you can add them here:
![gamewon](https://user-images.githubusercontent.com/74562633/160172920-f45f2d13-11cc-4add-96cf-aae6fdd15a31.gif)

![newt](https://user-images.githubusercontent.com/74562633/160175272-b2e90206-81df-4587-9bbb-9b48c4b93f5f.gif)


![timer](https://user-images.githubusercontent.com/74562633/160175246-65c85cb5-d7d5-4dc5-baa8-e01d3202d3a4.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[**In completing this project I used 3 sources over the entire duration. First is the codepath provided codes and guidance/ explanation for each segment. Second is W3schools.com, which had documentation of built in functions and unknown properites/ elements, not mentioned in the codepath guideline, that allowed me to take on the optional features. Third and lastly is dev.to article by Albert Chang, from where I learned how to insert two elements side by side.** ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[**The biggest challenge in completing this project in general was my unfamiliarity. Although I am a CS major, I've never touched Html or CSS before and how they interact with javascript. Thus, I spent the majority of time just testing around and trying to retain what I learned so I didn't have to constantly look at the resources if I wanted to make a certain change down the line. However this was far from it, as I later struggled with implementing the timer feature. In the beginning, it was quite simple and I managed to make the timer from the hint functions given by codepath; however figuring out where to put the code and how it interacts with the rest of the code was quite challenging. The issues I had were: stopping timer when it hits 0 minutes 0 seconds, resetting the timer back to original time after game ends or stop button is pressed. To combat this I spent a huge chunk of time just doing trial and error, but at certain point I realized that it was just plain stupid and spent some time going over the entire logic in my head like a flowchart. Then I realized that for the first problem, the code was being executed too fast for the if condition to apply, so what I did was put a delay. For the second problem, I was approaching it with a stubborn mindset and insisting on making my first solution, but in hindsight I realized that given the constraints, there is no way I can do it that way. So I thought about changing the constant variable that stored the initial time to a var and used innerHtml to retrieve that variable to display the changed time. All things considered, what helped me essentially was just slowing down , thinking it through, and finding the solution incrementally instead of just doing the entire thing and expecting it to work.**]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[**I have several questions about web development. Some are broad and the rest are specific to the project that I was wondering about. What are the key responsibilities of a web developer or rather how are tasks delegated in a corporate environment?What other ways are there besides print statements to debug, test, and troubleshoot? How do you adjust the size of all elements on a page depending on the screen size? How do websites that are used by multiple people on a daily basis and require some form of customization like for example “gmail” work? I have heard a lot about “cookies”, what are they and how do they work in making a smoother experience for the users? Lastly, it is given that writing programs  means coding every single thing down to the details, so how can we do so for things like complex animations?**]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[**If I had more time to work on this project, I would add a character selection feature that impacts how the rest of the game is shown. To elaborate, since it’s a squid game theme and the game requires there to be an audio and buttons with some degree of image or color, I was thinking that the game will start off with a squid game logo and a button, when clicked, will display a page of 4 or more squid game characters. Based on which one is selected, the main game page will be shown next with the chosen character's image with different background colors on all four buttons, each of them having a “red light green light” sound. I would’ve also spent time refining the project as I’ve noticed on multiple occasions that sometimes when the playclue function is called, the button doesn’t light up in a consistent manner. It either blinks too fast, too slow, or just works fine. Lastly, I was intending on adding a gif or a video when the user wins or loses a game. If they win, a video/ image of a piggy bank. If they lose, the front man walks up slowly and shoots. Sadly, I couldn’t find a fitting media file or have time/skills to make an animation. Instead I just added a “kaching” and gunshot audio, which can be heard in the game.**]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
