# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: IDK

  Researched answer: Rails has an application directory called app/ with three subdirectories: models, views, and controllers. This is the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI).



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD = Create Read Update Delete, the guidelines for a developer to follow when creating a good user friendly website.

  Researched answer: Within computer programming, the acronym CRUD stands for create, read, update and delete. These are the four basic functions of persistent storage



3. What is a migration? Why would you use one?

  Your answer: migration is when you forget to add a column within your database, you use migration to add a new column to your database rather than create a whole new table. Important because if you have a database that has tons of data already within your database but forget to add needed information within a column, then without a migration you'd have to create a whole new database and in our every piece of data all over again.

  Researched answer:Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:The Computer would hold the foreign key because it would be a sub model of the Person model. The computer model would be a more detailed table of that specific column of person.

  Researched answer: In Rails, an association is a connection between two Active Record models



5. What is object-relational mapping?

  Your answer: i'm not sure how to explain this at all

  Researched answer: Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON - JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.
- API - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc
- Endpoints - When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.
- Strong params - Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed
