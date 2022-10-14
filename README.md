 
   ![Amount of Contributors to the Repo](https://img.shields.io/github/contributors/libertyequalitydata/dynamic-data?style=for-the-badge) ![Amount of Stars for the Repo](https://img.shields.io/github/stars/libertyequalitydata/dynamic-data?style=for-the-badge) ![Amount of Forks for the Repo](https://img.shields.io/github/forks/libertyequalitydata/dynamic-data?style=for-the-badge) ![Amount of Open Issues for the Repo](https://img.shields.io/github/issues/libertyequalitydata/dynamic-data?style=for-the-badge)
<div align="center">
<p float="left">
	<a href="https://www.prifina.com/"><img src="docs/Prifina_Logo.png" alt="Prifina Inc Logo" height="80"></a>
</p>
<h1> Dynamic Data Fakers</h1>
</div>



### Table of Contents
- [What are dynamic data fakers used for](#what-are-dynamic-data-fakers-used-for)
- [Principles for creating dynamic data](#principles-for-creating-dynamic-data)
- [How to create](#how-to-create)
	- [Optional starting points](#optional-starting-points)
	- [Process perspective](#process-perspective)
- [Current Data Sources](#current-data-sources)
- [Contribute](#contribute)

### What are dynamic data fakers used for

- **Dynamic data visualization demos**. To be able to select different view options, use filters etc to see how visualization works and how different data can be seen.
- **App development**. Without realistic data it’s hard to imagine and design in insulation all the different ways data (to be entered and viewed) can vary and how that needs to be taken into account in;
    - ux/ui designs; given space, cutting long text to separately expanding views, field validations, gradual queries, etc.
    - how queries should be optimized for api consumptions and minimizing latency of query responses
    - how query results could or should be processed for viewing.
- **API performance testing** for large amounts of properly variable data. As indexing looks very different if data is not realistic
- **Creating simulations**. By chaining multiple dynamic data models, it’s possible to create simulations for “if this, then that” type of scenarios that help simulate some end results would look like based on given input and known biz logic or process dependencies.
- **Machine Learning models training**. If known variations is known based on real life data sets, it’s possible then to replicate dynamic fake data based on it. And then that data can be used for basic ML training. The quality of the trained model, is dependable from the quality of the logic used for creating dynamic fake data.

You can find the install packages for some of the existing ones via [NPM here](https://www.npmjs.com/search?q=%40dynamic-data).

Learn more about [dynamic data generators and the benefits of artificial data](https://medium.com/prifina/using-dynamic-data-generators-to-build-user-held-data-apps-75cb00336a0a) in software development.

View our [Blog Posts on dynamic data generators for specific sources](https://dev.prifina.com/blog)
### Principles for creating dynamic data

- Aim to mimic real-world data as much as possible.
- Start simple and gradually develop to learn from (real & real-looking but fake) ie. avatar icon, vs real person picture, name: random characters vs real names

## How to create

### Optional starting points

- start from an existing data source (API) → data model + data examples. Inspiration can be taken from [Prifina > Your Data](https://www.prifina.com/your-data.html)
- start from the data model only
- create a new data model based on biz logic
- start from another data faker (a good place to start as having a big userbase and audience, but not catering to more advanced dynamic data needs and more advanced data source types)

### Process perspective

1. have a data model and populate it with the first set of example data
2. what parts to make dynamic and why?
3. what is the logic to use to generate dynamic data?
4. coding of the dynamic data generation logic
5. connect also with ‘[jest](https://jestjs.io/)’ to create test cases

## Current Data Sources
Below are data sources that have already been started and could be improved upon:
 - [x] 23andMe
 - [X] Ancestry
 - [X] Fibit
 - [X] Foursquare
 - [X] Garmin
 - [X] Google
 - [X] Homekit
 - [X] Huawei
 - [X] iOS Health
 - [X] Lyft
 - [X] Movesense
 - [X] Oura
 - [X] Peloton
 - [X] Polar
 - [X] Runkeeper
 - [X] Sensor BNO055
 - [X] Strava
 - [X] Twitch
 - [X] Uber
 - [X] Whoop
 - [X] Withings
 
 Below are the Data Sources that are currently having data fakers created for:
 
 - [ ] Spotify
 - [ ] Calm
 - [ ] LinkedIn

 
## Contribute
We welcome contributions and forks to this data set, and look forward to seeing what developers build in our [Liberty. Equality. Data.](https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ) Slack channel.

1. Fork the Project
2. Clone the newly forked Project `git clone REPLACE-WITH-URL`
3. Make as many changes as you desire
4. Add your changes `git add *`
5. Commit your changes `git commit -m "Commit Title"`
6. Push Commit to Original Repo `git push origin main`
7. Open a Pull Request

For a more thorough step-by-step guide, please visit [this document](https://prifina.notion.site/Creating-and-Improving-Data-Fakers-7fec940f15a64b5aa378d84eaa9b278e)
