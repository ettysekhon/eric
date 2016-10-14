1. Separate the application you’re building and the platform its on from the components you write
2. Inject state into your application, and what a “container” aka “connected” aka “smart” component really is.
3. Implement more complex features by leveraging Higher Order Components and a compose function — it’s awesome.
4. Make your application UI understandable by looking at a single file, not dozens.
5. Make your codebase flat without sacrificing grokability.

Imagine you’re building the new MyAwesomeCalculator app. The functions that are required to make the MyAwesomeCalculator work (add(), subtract(), clearInput(), submit(), etc) describe what the calculator does, but they aren’t coupled to it. For example, some other app that needs to add() could reuse that function, even if it’s not to build another calculator app.

So I say, the usefulness of the components you write should be similarly powerful and reusable beyond the application you’re building.
