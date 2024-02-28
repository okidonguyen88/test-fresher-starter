import { Card, Image, Text, Group, Flex, Button } from "@mantine/core";
import { PokemonData } from "../data/pokemon.data";
import { useClipboard } from '@mantine/hooks';



export default function PokemonCard({ pokemon }: { pokemon: PokemonData; }) {

  //Làm Bài Tại Đây
  const clipboard = useClipboard({ timeout: 500 });

  const bailam3Style = `

  .myBadge{
    color: rgb(178, 242, 187);
    background-color: rgba(47, 158, 68, 0.2);
  }

  .myButton{
    color: rgb(255, 216, 168);
    background-color: rgba(232, 89, 12, 0.2);
  }

  .myButton:hover{
    color: rgb(255, 216, 168);
    background-color: rgba(247, 103, 7, 0.25);
  }

  .copyButton{
    color: rgb(255, 216, 168);
    background-color: rgb(35, 75, 76);
  }

  .copyButton:hover{
    color: rgb(150, 242, 215);
    background-color: rgb(35, 75, 76);
  }

`;

  return (
    <>
      <style>{bailam3Style}</style>
      <Card shadow="sm" p={20} radius="md" withBorder>
        <Card.Section>
          <Image
            style={{ background: "white" }}
            src={pokemon.image}
            fit="contain"
            height={300}
            miw={200}
            alt={pokemon.name}
          />
        </Card.Section>

        <Group mt="md" mb="xs" >
          <Flex w={"100%"} justify={"space-between"}>
            <Text fw={500}>{pokemon.name}</Text>

          </Flex>
        </Group>

        <Text size="sm" c="dimmed">
          {pokemon.description}
        </Text>

        {clipboard.copied ?
          <Button className="copyButton" variant="filled" fullWidth mt="md" radius="md">
            Copied
          </Button> :
          <Button className="myButton" variant="filled" fullWidth mt="md" radius="md"
            onClick={() => clipboard.copy(pokemon.description)}>
            Copy Pokemon Description
          </Button>}
      </Card>
    </>
  );
}