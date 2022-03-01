import { Title, Space, Text, Button, Container, SimpleGrid, Image, Center } from '@mantine/core';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <>
      <SimpleGrid cols={1}>
        <Container>
        <Title sx={{ fontSize: 70, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
          <Text inherit variant="gradient" component="span">
            Live results
          </Text>
        </Title>
        </Container>
        <Container>
          <Image
            width={800}
            height={400}
            src={null}
            alt="With default placeholder"
            withPlaceholder
          />
          <Space h="md" />
          <Center>
            <Link href="/map" passHref>
              <Button component="a">View Map</Button>
            </Link>
          </Center>
        </Container>
      </SimpleGrid>
    </>
  );
}
