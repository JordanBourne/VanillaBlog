module.exports = {
    post: [
        {
            title: "The Makings of a Minimum Viable Product",
            author: "Jordan Bourne",
            date: "2018-07-21",
            preview: "It should go without saying that one of the most important aspects of developing software is the ability to deliver a product. It can be easy to forget this sometimes and get so caught up trying to create the perfect product or trying to write the most beautiful code that suddenly months have gone by and there's nothing to show for it. This is something I can fall victim to regularly, so my <a href='http://www.ClimbingTiming.com'>Climbing Timing</a> project has been an exercise of delivery for me.",
            link: "making-an-mvp",
            body: `<p>
                It should go without saying that one of the most important aspects of developing software is the ability to deliver a product. It can be easy to forget this sometimes and get so caught up trying to create the perfect product or trying to write the most beautiful code that suddenly months have gone by and there's nothing to show for it. This is something I can fall victim to regularly, so my <a href='http://www.ClimbingTiming.com'>Climbing Timing</a> project has been an exercise of delivery for me.
            </p>
            <h3>What is a Minimum Viable Product (MVP), and why should we care?</h3>
            <p>
                The name is a strong hint already, but to describe it entirely: A MVP is a version of the product that has only base requirements fulfilled to be useable and accomplish the tasks it was set out to do.
            </p>
            <p>
                This can be useful for several reasons:
                <ul>
                    <li>
                        Quickly determine the proof of concept or viability of a product
                    </li>
                    <li>
                        The customers can start using it and providing feedback more quickly
                    </li>
                    <li>
                        Provides a more precise direction of which to focus efforts
                    </li>
                </ul>
            </p>
            <p>
                Note that just because you're trying to deliver a product quickly, you shouldn't be cutting too many corners and sacrificing the quality of your code. It doesn't need to be the essence of perfection, but it does need to be easy to iterate on.
            </p>
            <h3>My Project - Climbing Timing</h3>
            <p>
                The most popular way to train finger strength for rock climbing outside of just climbing is to do something called Hangboarding. This just means findind a small edge of usually 8-20mm, and hanging from it for a few seconds, resting a few minutes, and then repeating. This seemed like a simple enough task to make a web app for, and since I couldn't find one in my searchings, I decided to make one for myself.
            </p>
            <p>
                The first step then is to lay out everything I would like the app to do:
                <ul>
                    <li>Show how long to hang and rest for</li>
                    <li>All the normal functions of a timer (start, stop, pause, reset)</li>
                    <li>Choose between different training programs</li>
                    <li>Support for creating a custom training program</li>
                    <li>More detailed programs that include specific grip types or edge size</li>
                    <li>Offline support for training in the backcountry</li>
                    <li>Create an account to track progress</li>
                </ul>
            </p>
            <p>
                Now this isn't a huge list of items, but I'm making this in the little spare time I have and I would like it done as soon as possible for my own use. That means paring down the list of the things I would like to have to just what is necessary for it to be useful. For that, I really only need to have the timer <strong>display the time intervals</strong> and <strong>be able to start and stop it</strong>. Also since I'm relatively new to training this way, I will also include the ability to <strong>choose between different training programs</strong>.
            </p>
            <p>
                With these three goals defined, it's time to start development.
            </p>`
        }, {
            title: "Introduction to the HTML5 Template Element",
            author: "Jordan Bourne",
            date: "2018-07-15",
            preview: `The &lt;template&gt; element is one of the easiest ways to introduce reuseable components into your page. They sit unrendered in the DOM until called upon, at which point you can reuse it as many times as you'd like and even change the contents of it if desired.`,
            link: "html5-template",
            body: `<p>
                The &lt;template&gt; element is one of the easiest ways to introduce reuseable components into your page. They sit unrendered in the DOM until called upon, at which point you can reuse it as many times as you'd like and even change the contents of it if desired.
            </p>
            <h3>The Basics</h3>
            <p>
                Here we have a small template:
            </p>
            <pre class="html">
                <code>&lt;template id="testTemplate"&gt;</code>
                <code>    &lt;div class="testDiv"&gt;</code>
                <code>        Hello World</code>
                <code>    &lt;/div&gt;</code>
                <code>&lt;/template&gt;</code>
            </pre>
            <p>
                To get render it on the page, it just takes a little bit of JavaScript:<br />
                (This assumes you have a div somehere on the page with the id: <i>destination</i>)
            </p>
            <pre class="javascript">
                <code>var templateClone = document.getElementById("testTemplate");</code>
                <code>var destination = document.getElementById("destination");</code>
                <code>destination.appendChild(templateClone.content.cloneNode(true));</code>
            </pre>
            <p>
                Now all you have to do to is tie this to some sort of event, for example an onclick as seen here: (<a href="https://codepen.io/JBourne/pen/RJdMjJ">View in CodePen</a>)
                <br />
                <button class="templateActionButton" onclick="templatesIntroduction.addExampleTemplate()">Add Template</button>
                <button class="templateActionButton" onclick="templatesIntroduction.removeExampleTemplates('destinationOne')">Remove Templates</button>
            </p>
            <div id="destinationOne">
                <span class="destinationHeader">Destination</span>
            </div>
            <h3>Modifying Content</h3>
            <p>
                As you find yourself using HTML templates more frequently, the need to have dynamic content is very common. This can be accomplished in a very similar manner to how modification of a standard element would be modified. It's typically easiest to do the modifications before you add the element to the page, unless you want to be dynamically generating an ID or selecting it from an array of like elements.
            </p>
            <pre class="javascript">
                <code>var templateClone = document.getElementById("testTemplate");</code>
                <code>var destination = document.getElementById("destination");</code>
                <code>var inputText = document.getElementById("exampleTwoText");</code>
                <code>templateClone.content.querySelector(".testDiv").textContent = inputText.value;</code>
                <code>destination.appendChild(templateClone.content.cloneNode(true));</code>
            </pre>
            <p>
                For this example, just type anything you want to appear into the input box, and then hit the button to add the template: (<a href="https://codepen.io/JBourne/pen/ZRZENp">View in CodePen</a>)
                <br />
                <input type="text" id="exampleTwoText" />
                <br />
                <button class="templateActionButton" onclick="templatesIntroduction.addExampleTwoTemplate()">Add Template</button>
                <button class="templateActionButton" onclick="templatesIntroduction.removeExampleTemplates('destinationTwo')">Remove Templates</button>
            </p>
            <div id="destinationTwo">
                <span class="destinationHeader">Destination</span>
            </div>
            <p>
                That's all there is to it! The template element is a versatile tool with wide ranging applications. It's unfortunately lacking browser support from Internet Explorer, but all modern browsers support it even going back a number of versions. For the full list of browser support, <a href ="https://caniuse.com/#feat=template">check here</a>.
            </p>
            <p class="blogFooter">
                Comments or questions? Leave a message down below or email me at JordanBourne@ymail.com
            </p>`,
            templates: [`<template id="testTemplate">
                <div class="testDiv">
                    Hello World
                </div>
            </template>`]
        }
    ]
}
