import React from "react"
import { Container, Grid } from "semantic-ui-react"
import Items from "./Items"
import Cart from "./Cart"

const ContainerWrapper = () => (
  <Container>
    <Grid padded="vertically">
      <Grid.Row>
        <Grid.Column width={12}>
          <Items />
        </Grid.Column>
        <Grid.Column width={4}>
          <Cart />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default ContainerWrapper
