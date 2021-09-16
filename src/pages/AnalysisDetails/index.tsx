import { Flex, Box, Link, Text, Input, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GlobalHeader from "../../components/GlobalHeader";
import { useState } from "react";

interface IdParams {
  id: string;
}

interface AnalysisData {
  name: string;
  batch: string;
  analyses: [
    {
      an_name: string;
      parameters: [
        {
          name: string;
          vmin: string;
          vmax: string;
          unit: string;
          result: string;
          isAproved: boolean;
        }
      ];
    }
  ];
}

const AnalysisDetails = () => {
  const { id } = useParams<IdParams>();

  const analyses = [
    {
      name: "lamen",
      batch: "654987954",
      made: "03-12-2021",
      category: "Produto acabado",
      class: "macarrão",
      analyses: [
        {
          an_name: "fisio-quimicos",
          parameters: [
            {
              name: "umidade",
              vmin: "3",
              vmax: "5",
              unit: "%",
              result: "",
              isAproved: false,
            },
            {
              name: "AW",
              vmin: "0.10",
              vmax: "0.45",
              unit: "P/PO",
              result: "",
              isAproved: false,
            },
          ],
        },
        {
          an_name: "microbiológicos",
          parameters: [
            {
              name: "coliformes",
              vmin: "3",
              vmax: "5",
              unit: "UFC/g",
              result: "",
              isAproved: false,
            },
          ],
        },
      ],
      isConcluded: false,
      userId: 1,
      id: 1,
    },
    {
      name: "baguete",
      batch: "879546549",
      made: "03-12-2021",
      category: "Produto acabado",
      class: "pão",

      analyses: [
        {
          an_name: "fisio-quimicos",
          parameters: [
            {
              name: "umidade",
              vmin: "3",
              vmax: "5",
              unit: "%",
              result: "",
              isAproved: false,
            },
            {
              name: "AW",
              vmin: "0.10",
              vmax: "0.45",
              unit: "P/PO",
              result: "",
              isAproved: false,
            },
          ],
        },
        {
          an_name: "microbiológicos",
          parameters: [
            {
              name: "coliformes",
              vmin: "3",
              vmax: "5",
              unit: "UFC/g",
              result: "",
              isAproved: false,
            },
          ],
        },
      ],

      isConcluded: true,
      userId: 1,
      id: 2,
    },
    {
      name: "aveia",
      batch: "687954954",
      made: "03-12-2021",
      category: "Matéria prima",
      class: "cereal",

      analyses: [
        {
          an_name: "fisio-quimicos",
          parameters: [
            {
              name: "umidade",
              vmin: "3",
              vmax: "5",
              unit: "%",
              result: "",
              isAproved: false,
            },
            {
              name: "AW",
              vmin: "0.10",
              vmax: "0.45",
              unit: "P/PO",
              result: "",
              isAproved: false,
            },
          ],
        },
        {
          an_name: "microbiológicos",
          parameters: [
            {
              name: "coliformes",
              vmin: "3",
              vmax: "5",
              unit: "UFC/g",
              result: "",
              isAproved: false,
            },
          ],
        },
      ],

      isConcluded: false,
      userId: 1,
      id: 3,
    },
  ];

  const analysis = analyses.find((item) => item.id === Number(id));

  const [data, setData] = useState(analysis?.analyses);

  console.log(data);
  return (
    <>
      <GlobalHeader>
        <Link to="/">Cadastrar amostra</Link>
        <Link to="/">Analisar amostra</Link>
        <Link to="/">Pesquisar amostra</Link>
      </GlobalHeader>
      <Flex
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
        borderRadius="2xl"
        p="4"
        w="90vw"
        m="3vw"
        ml="5vw"
        align="center"
        justify="center"
        direction="column"
        bg="blue.600"
        color="white"
      >
        <Box>
          <Flex>
            <Text fontWeight="semibold" mr="2">
              Amostra:
            </Text>
            <Text>{analysis?.name}</Text>
          </Flex>
          <Flex>
            <Text fontWeight="semibold" mr="2">
              Lote:
            </Text>
            <Text>{analysis?.batch}</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
        borderRadius="2xl"
        p="4"
        w="90vw"
        m="5vw"
        mt="3vw"
        bg="blue.300"
        direction="column"
      >
        {analysis?.analyses.map((item, indexA) => (
          <Flex
            key={indexA}
            w="100%"
            direction="column"
            align="center"
            color="white"
          >
            <Text
              align="center"
              fontSize="2xl"
              fontWeight="semibold"
              mt="4"
              mb="2"
            >
              Parâmetro {item.an_name}
            </Text>

            <Flex direction={["column", "row", "row"]} w="90%" mb="3">
              <Text
                flex="1"
                align="center"
                borderBottom="2px"
                fontWeight="semibold"
                m="2"
              >
                Análise
              </Text>
              <Text
                flex="1"
                align="center"
                borderBottom="2px"
                fontWeight="semibold"
                m="2"
              >
                V.Min.
              </Text>
              <Text
                flex="1"
                align="center"
                borderBottom="2px"
                fontWeight="semibold"
                m="2"
              >
                V.Max.
              </Text>
              <Text
                flex="1"
                align="center"
                borderBottom="2px"
                fontWeight="semibold"
                m="2"
              >
                Un.
              </Text>
              <Text
                flex="1"
                align="center"
                borderBottom="2px"
                fontWeight="semibold"
                m="2"
              >
                Resultado
              </Text>
            </Flex>
            <Flex direction="column" color="white" w="90%">
              {item.parameters.map((param, indexB) => (
                <Flex key={indexB} direction={["column", "row", "row"]}>
                  <Text
                    flex="1"
                    align="center"
                    borderBottom="2px"
                    fontWeight="semibold"
                    m="2"
                  >
                    {param.name}
                  </Text>
                  <Text
                    flex="1"
                    align="center"
                    borderBottom="2px"
                    fontWeight="semibold"
                    m="2"
                  >
                    {param.vmin}
                  </Text>
                  <Text
                    flex="1"
                    align="center"
                    borderBottom="2px"
                    fontWeight="semibold"
                    m="2"
                  >
                    {param.vmax}
                  </Text>
                  <Text
                    flex="1"
                    align="center"
                    borderBottom="2px"
                    fontWeight="semibold"
                    m="2"
                  >
                    {param.unit}
                  </Text>
                  <Input
                    variant="flushed"
                    flex="1"
                    align="center"
                    borderBottom="2px"
                    fontWeight="semibold"
                    m="2"
                    textAlign="center"
                    value={param.result}
                    // onChange={(e) => {
                    //   setData(currentItem=>{
                    //     currentItem?.map(x=> x.parameters

                    //       //x.id === p.id ? {
                    //         //...x,
                    //         //fisrtName: e.target.value
                    //         //}

                    //         param.result
                    //         )
                    //   }
                    //   )
                    // }}
                  />
                </Flex>
              ))}
            </Flex>
            <Button>Apertaqui</Button>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
export default AnalysisDetails;
