import { Title, Text, Button, Image, Autocomplete, Container, SimpleGrid, Space } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/layout';

export default function HomePage() {
  const [value, setValue] = useState('');
  const autoData = [
    { value: '12345-100-10' }, { value: '12345-100-20' }, { value: '12345-100-30' }, { value: '12345-100-40' }, { value: '12345-100-50' }, { value: '12345-400-10' }, { value: '12345-400-20' }, { value: '12345-400-30' }, { value: '12345-400-40' }, { value: '12345-400-5' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005423' }, { value: '98005424' }, { value: '98005425' }, { value: '98005426' }, { value: '98005427' }, { value: '98005428' }, { value: '98005429' }, { value: '98005430' }, { value: '98005431' }, { value: '98005432' }, { value: '88002420' }, { value: '88002421' }, { value: '88002422' }, { value: '88002423' }, { value: '88002424' }, { value: '88002425' }, { value: '88002426' }, { value: '88002427' }, { value: '88002428' }, { value: '88002429' }, { value: '78002430' }, { value: '78002431' }, { value: '78002432' }, { value: '78002433' }, { value: '78002434' }, { value: '78002435' }, { value: '78002436' }, { value: '78002437' }, { value: '78002438' }, { value: '78002439' }];
  return (
    <Layout>
      <SimpleGrid cols={1}>
        <Container sx={{ minHeight: '600px' }}>
          <Image
            radius="md"
            src="supply-chain.png"
            fit="contain"
          />
          <Title sx={{ fontSize: 60, fontWeight: 900, letterSpacing: -2 }} align="center" mt={30}>
            <Text inherit variant="gradient" component="span">
              Moving from Point A to Point B
            </Text>
          </Title>
          <Title sx={{ fontSize: 20, fontWeight: 300 }} align="center" mt={10}>
            <Text component="div">
              Enter your PO# below to view real time statistics and current status of your product.
            </Text>
            <Space h="md" />
            <Container size={300} padding="md">
              <Autocomplete placeholder="Start typing your SKU# or PO#" value={value} data={autoData} onChange={setValue} />
            </Container>
          </Title>
        </Container>
        <Container>
          <Link href="/results" passHref>
            <Button component="a">View Results</Button>
          </Link>
        </Container>
      </SimpleGrid>
    </Layout>
  );
}
