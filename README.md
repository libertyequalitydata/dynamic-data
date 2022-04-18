### What are dynamic data fakers used for

- **Dynamic data visualization demos**. To be able to select different view options, use filters etc to see how visualization works and how different data can be seen.
- **App development**. Without realistic data it’s hard to imagine and design in insulation all the different ways data (to be entered and viewed) can vary and how that needs to be taken into account in;
    - ux/ui designs; given space, cutting long text to separately expanding views, field validations, gradual queries, etc.
    - how queries should be optimized for api consumptions and minimizing latency of query responses
    - how query results could or should be processed for viewing.
- **API performance testing** for large amounts of properly variable data. As indexing looks very different if data is not realistic
- **Creating simulations**. By chaining multiple dynamic data models, it’s possible to create simulations for “if this, then that” type of scenarios that help simulate some end results would look like based on given input and known biz logic or process dependencies.
- **Machine Learning models training**. If known variations is known based on real life data sets, it’s possible then to replicate dynamic fake data based on it. And then that data can be used for basic ML training. The quality of the trained model, is dependable from the quality of the logic used for creating dynamic fake data.

### Principles for creating dynamic data

- Aim to mimic real-world data as much as possible.
- Start simple and gradually develop to learn from (real & real-looking but fake) ie. avatar icon, vs real person picture, name: random characters vs real names

## How to create

### Optional starting points

- start from an existing data source (API) → data model + data examples. Inspiration can be taken from here [https://www.prifina.com/your-data.html](https://www.prifina.com/your-data.html)
- start from the data model only
- create a new data model based on biz logic
- start from another data faker (a good place to start as having a big userbase and audience, but not catering to more advanced dynamic data needs and more advanced data source types)

### Process perspective

1. have a data model and populate it with the first set of example data
2. what parts to make dynamic and why?
3. what is the logic to use to generate dynamic data?
4. coding of the dynamic data generation logic (need to know node.js)
5. connect also with ‘[jest](https://jestjs.io/)’ to create test cases
