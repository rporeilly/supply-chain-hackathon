import { Title, Text, Container, SimpleGrid, Image, Space, Center } from '@mantine/core';
import Link from 'next/link';
import Layout from '../components/layout';

export default function ResultsPage() {
  return (
    <Layout>
      <SimpleGrid cols={1}>
        <Container>
          <Title sx={{ fontSize: 70, fontWeight: 900, letterSpacing: -2 }} align="center" mb={30} mt={30}>
            <Text inherit variant="gradient" component="span">
              Map
            </Text>
          </Title>
          <Container>
            <Image
              radius="md"
              src="map-example.png"
            />
          </Container>
          <Space h="md" />
          <Center>
            <Link href="/">
              Search again
            </Link>
          </Center>
        </Container>
      </SimpleGrid>
    </Layout>
  );
}
