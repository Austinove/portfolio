import { FC, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  return (
    <div className="container-fluid">
      <div className="row custom-section">
        <div className="col-md-5 mx-auto">
          <Card>
            <CardHeader>Heading for Card</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-7 mx-auto">
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/200" />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
