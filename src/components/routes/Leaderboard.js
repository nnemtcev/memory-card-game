import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";

const Leaderboard = () => {
  return (
    <Box>
      <Table variant="simple" size="sm">
        <TableCaption>High scores for all Pokémemory players</TableCaption>
        <Thead>
          <Th>Player Name</Th>
          <Th>High Score</Th>
          <Th>Date Played</Th>
        </Thead>
        <Tbody>
          <Tr>
            <Td>nnemtcev</Td>
            <Td>120</Td>
            <Td>08/10/2021</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;
