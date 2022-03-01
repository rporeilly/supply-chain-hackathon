import { Container, Paper } from '@mantine/core';

export default function Layout(props: any) {
  return (
    <Container mt="xl">
      <Paper sx={{minHeight: '500px'}} padding="xl" shadow="sm" radius="md">
        {props.children}
      </Paper>
    </Container>
  );
}
