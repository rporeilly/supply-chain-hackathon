import { Title, Space, Text, Button, Container, SimpleGrid, Paper, Center } from '@mantine/core';
import Link from 'next/link';
import Layout from '../components/layout';

export default function ResultsPage() {
  return (
    <Layout>
      <SimpleGrid cols={1}>
        <Container>
        <Title sx={{ fontSize: 70, fontWeight: 900, letterSpacing: -2 }} align="center" mt={30}>
          <Text inherit variant="gradient" component="span">
            Up to the minute results
          </Text>
        </Title>
        </Container>
        <Container sx={{ maxWidth: '100%'}}>
          <Paper sx={{ maxWidth: '100%', padding: '20px', background: 'white', borderRadius: '15px' }}>
            <iframe title="Hackathon Team 3 Power BI_v2 - Location" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=c1338a7e-d9d7-4307-9593-a93b9aa132ba&autoAuth=true&ctid=2e0d020c-5368-4963-a295-44297d7fd521&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtYy1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true" />
          </Paper>
          <Space h="lg" />
          <Center>
            <Link href="/map" passHref>
              <Button component="a">View Map</Button>
            </Link>
          </Center>
        </Container>
      </SimpleGrid>
    </Layout>
  );
}
