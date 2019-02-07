import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import omnifood from "../images/Omnifood.png"
import blog from "../images/Omnifood.png"
import trello from "../images/trello.png"
import youtube from "../images/youtube.png"

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCatergories() {

      return (
        <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              `url(${omnifood}) `}}
        >
          <h3>HTML & CSS</h3>
        </CardTitle>
        <CardText>
        A trello like clone application built fully in React. It allows the to create new boards to catergories the different tasks.
        The user can then add a new card to the desired board creating a list of cards. You can then mark tick off completed tasks and they will be removed from the list.
        </CardText>
        <CardActions border>
        <Button colored><a href="https://github.com/MasoodGool/HealthyEats">Github</a></Button>
        <Button colored><a href="https://masood-porfolio-omnifood.herokuapp.com/">Live Demo</a></Button>
        </CardActions>
        <CardMenu style={{ color: "fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                `url(${youtube}) `}}
          >
            <h3>React</h3>
            </CardTitle>
            <CardText>
              A trello like clone application built fully in React. It allows the uuser
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/MasoodGool/MyTube">Github</a></Button>
            <Button colored><a href="https://masoodgool.herokuapp.com/youtube">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                `url(${trello}) `}}
          >
            <h3>Redux</h3>
            </CardTitle>
            <CardText>
            A trello like clone application built fully in React. It allows the to create new boards to catergories the different tasks.
            The user can then add a new card to the desired board creating a list of cards. You can then mark tick off completed tasks and they will be removed from the list.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/MasoodGool/TrelloClone">Github</a></Button>
              <Button colored><a href="https://masoodgool.herokuapp.com/trello">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                `url(${omnifood}) `}}
          >
            <h3>React and Redux</h3>
            </CardTitle>
            <CardText>
              A simple weather application built using React, Redux and the Google Maps API. It allows the user to enter in a location. This will display the location on the map.
              As well as provide a visual 5 day frocast for the Tempreture, Humdity and Air Pressure in the for of graphs.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/MasoodGool/weather">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );

    
    
    }
  

  render() {
    return (
      <div className="catergory-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>PROJECTS</Tab>

        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatergories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
