import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const Item = () => (
  <Card>
    <Image src="/images/wireframe/image.png" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button content="Add To Cart" primary />
    </Card.Content>
  </Card>
);

export default Item
