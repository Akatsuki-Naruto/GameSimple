const gridReducer = (state = [], action) => {
  switch (action.type) {

    case "FIND_SEQUENCE": {
      const grid = state;
      const rowRootIndex = action.payload.rowRootIndex;
      const columnRootIndex = action.payload.columnRootIndex;

      const colorIndex = grid[rowRootIndex][columnRootIndex];
      let identicalNeighbours = [[rowRootIndex, columnRootIndex]];
      let isLookingIdenticalNeighbours = true;

      function isNeighbourAlreadyAdded(inputArray,props) {
        let didFindElement = false;
        identicalNeighbours.forEach((elemen) => {
          if (elemen[0] === inputArray[0] && elemen[1] === inputArray[1]) {
            didFindElement = true;
          }
        });

        if (didFindElement) {
          return true;
        } else {
          return false;
        }
      }

      while (isLookingIdenticalNeighbours) {
        let didFindAnyIdenticalNeighbours = false;

        identicalNeighbours.forEach((coordinates) => {
          const isNotOnTopEdge = coordinates[0] > 0;
          const isNotOnRightEdge = coordinates[1] < grid[0].length - 1;
          const isNotOnBottomEdge = coordinates[0] < grid.length - 1;
          const isNotOnLeftEdge = coordinates[1] > 0;

          if (isNotOnTopEdge) {
            // Is the top neighbour identical?
            if (grid[coordinates[0] - 1][coordinates[1]] === colorIndex) {
              const newElement = [coordinates[0] - 1, coordinates[1]];
              if (!isNeighbourAlreadyAdded(newElement)) {
                identicalNeighbours.push(newElement);
                didFindAnyIdenticalNeighbours = true;
                setTrigger(!Trigger)
              }
            }
          }

          if (isNotOnRightEdge) {
            // Is the right neighbour identical?
            if (grid[coordinates[0]][coordinates[1] + 1] === colorIndex) {
              const newElement = [coordinates[0], coordinates[1] + 1];
              if (!isNeighbourAlreadyAdded(newElement)) {
                identicalNeighbours.push(newElement);
                didFindAnyIdenticalNeighbours = true;
                setTrigger(!Trigger)
              }
            }
          }

          if (isNotOnBottomEdge) {
            // Is the bottom neighbour identical?
            if (grid[coordinates[0] + 1][coordinates[1]] === colorIndex) {
              const newElement = [coordinates[0] + 1, coordinates[1]];
              if (!isNeighbourAlreadyAdded(newElement)) {
                identicalNeighbours.push(newElement);
                didFindAnyIdenticalNeighbours = true;
                setTrigger(!Trigger)
              }
            }
          }

          if (isNotOnLeftEdge) {
            // Is the left neighbour identical?
            if (grid[coordinates[0]][coordinates[1] - 1] === colorIndex) {
              const newElement = [coordinates[0], coordinates[1] - 1];
              if (!isNeighbourAlreadyAdded(newElement)) {
                identicalNeighbours.push(newElement);
                didFindAnyIdenticalNeighbours = true;
                setTrigger(!Trigger)
              }
            }
          }
        });

        if (!didFindAnyIdenticalNeighbours) {
          isLookingIdenticalNeighbours = false;
        }
      }

      let modifiedGrid = grid;
      let score = 0;

      if (identicalNeighbours.length > 1) {
        identicalNeighbours.forEach((coordinates) => {
          modifiedGrid[coordinates[0]][coordinates[1]] = -1;
        });
        score = identicalNeighbours.length;
      }

      if (score > 1) {
        return modifiedGrid.map((element) => element);
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default gridReducer;
