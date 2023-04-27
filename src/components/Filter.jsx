import { Button, Input } from "@chakra-ui/react";

export default function Filter({
  searchValue,
  setSearchValue,
  setsearchParams,
}) {
  return (
    <div>
      <div className="filter-container">
        <label>
          <Input
            type="search"
            placeholder="Search for Events"
            mt="2rem"
            mb="2rem"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </label>
        <Button
          colorScheme="yellow"
          m=".2rem"
          onClick={() => setsearchParams({})}
        >
          All
        </Button>
        <Button
          colorScheme="green"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1] })}
        >
          Sports
        </Button>
        <Button
          colorScheme="blue"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [2] })}
        >
          Games
        </Button>
        <Button
          colorScheme="purple"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1, 2] })}
        >
          Sports and Games
        </Button>
      </div>
    </div>
  );
}
