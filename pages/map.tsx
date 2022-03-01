import { Title, Text, Container, SimpleGrid, Image, Space, Center } from '@mantine/core';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <>
      <SimpleGrid cols={1}>
        <Container>
          <Title sx={{ fontSize: 70, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
            <Text inherit variant="gradient" component="span">
              Map
            </Text>
          </Title>
          <Container>
            <Image
              width={800}
              height={400}
              src={null}
              alt="With default placeholder"
              withPlaceholder
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
    </>
  );
}
