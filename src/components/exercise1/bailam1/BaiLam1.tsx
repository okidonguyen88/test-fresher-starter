import { Box, Center, Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";

// Define Customize Style
const bailam1Style = `

  .myBadge{
    color: rgb(178, 242, 187);
    background-color: rgba(47, 158, 68, 0.2);
  }

  .myButton{
    color: rgb(255, 216, 168);
    background-color: rgba(232, 89, 12, 0.2);
  }

  .myButton:hover {
    background-color: rgba(232, 89, 12, 0.2);
  }

`;

export default function BaiLam1() {
  return (
    <>
      <style>{bailam1Style}</style>
      <Center>
        <Box maw={350}>
          <Card shadow="sm" mt={24} p={20} radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1638793772352-631e0543c211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                height={160}
                alt="Son Doong"
              />
            </Card.Section>

            <Group mt="md" mb="xs" >
              <Flex w={"100%"} justify={"space-between"}>
                <Text fw={500}>Son Doong Adventures
                </Text>
                <Badge className="myBadge">FEATURED</Badge>
              </Flex>
            </Group>

            <Text size="sm" c="dimmed">
              With Son Doong Tours you can explore more of the magical fjord landscapes with tours and activities on and around the Son Doong cave of Vietnam
            </Text>

            <Button className="myButton" fullWidth mt="md" radius="md" >
              Book classic tour now
            </Button>
          </Card>
        </Box>
      </Center>
    </>
  );
}