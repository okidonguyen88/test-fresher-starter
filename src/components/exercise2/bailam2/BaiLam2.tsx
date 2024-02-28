import { useState } from 'react';
import { Button, ButtonProps, Center, Container, Divider, Grid, SegmentedControl, Switch } from "@mantine/core";

// Define Customize Style
const bailam2Style = `
`;

export default function BaiLam2() {

  const [value, setValue] = useState('default');
  const [disabledToggle, setDisabledToggle] = useState(false);
  return (

    <>
      <style>{bailam2Style}</style>
      <Grid mt={24}>
        <Grid.Col lg={6} md={12} >
          <Center>
            <SegmentedControl className='mySegmented'
              color='pink'
              value={value}
              onChange={setValue}
              data={[
                { label: 'Outline', value: 'outline' },
                { label: 'Light', value: 'light' },
                { label: 'Filled', value: 'filled' },
                { label: 'Subtle', value: 'subtle' },
                { label: 'Default', value: 'default' },
              ]}
            />
          </Center>
        </Grid.Col>
        <Grid.Col lg={6} md={12}>
          <Center ><Switch label="Disabled" checked={disabledToggle} onChange={(event) => setDisabledToggle(!disabledToggle)} /></Center>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
      <Center>
        {value == "outline" ? <Button disabled={disabledToggle} variant={value}>This is Button</Button> : ""}
        {value == "light" ? <Button disabled={disabledToggle} variant={value}>This is Button</Button> : ""}
        {value == "filled" ? <Button disabled={disabledToggle} variant={value}>This is Button</Button> : ""}
        {value == "subtle" ? <Button disabled={disabledToggle} variant={value}>This is Button</Button> : ""}
        {value == "default" ? <Button disabled={disabledToggle} variant={value}>This is Button</Button> : ""}
      </Center>
    </>

  );
}