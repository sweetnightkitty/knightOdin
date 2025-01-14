function knightMoves(start, end) {
    if(!isValidVertex(start)) {
        throw new Error("Start vertex exceeds the game board.");
    }

    if(!isValidVertex(end)) {
        throw new Error("End vertex exceeds the game board.");
    }

    const queue = [
        {
            path: [],
            vertex: start
        }
    ];

    //need a traverseGraph function
    const shortestPath = traverseGraph(queue.shift());

    //Takes in an object
    function traverseGraph({path, vertex}) {
        //When end is reached, traversal ends
        if(JSON.stringify(vertex) == JSON.stringify(end)) {
            path.push(vertex);
            return path;
        }

        //Gets an array of all possible vertices
        const possibleMoves = getPossibleMoves(vertex);

        //For each possible move you copy the current path and vertex of the predecessor to the next item's path
        //Then set the new vertex equal to that specific move
        const possiblePaths = possibleMoves.map((move) => {
            return {path:[...path, vertex], vertex: move}
        });
        
        //Push the new moves to the queue
        queue.push(...possiblePaths);

        //Traverse the next item in the queue
        return traverseGraph(queue.shift());
    }

}


function getPossibleMoves(vertex) {
    const x = vertex[0];
    const y = vertex[1];
    const possibleMoves = [];

    let a = x - 2;
    let b;
    if(a > 0) {
        b = y + 1;
        if(b < 8) {
            possibleMoves.push([a, b]);
        }

        b = y - 1;
        if(b > 0) {
            possibleMoves.push([a, b]);
        }
    }

    a = x + 2;
    if(a < 8) {
        b = y + 1;
        if(b < 8) {
            possibleMoves.push([a, b]);
        }
        b = y - 1;
        if(b > 0) {
            possibleMoves.push([a, b]);
        }
    }

    a = x - 1;
    if(a > 0) {
        b = y + 2;
        if(b < 8) {
            possibleMoves.push([a, b]);
        }
        b = y - 2;
        if(b > 0) {
            possibleMoves.push([a, b]);
        }
    }

    a = x + 1;
    if(a < 8) {
        b = y + 2;
        if(b < 8) {
            possibleMoves.push([a, b]);
        }
        b = y - 2;
        if(b > 0) {
            possibleMoves.push([a, b]);
        }
    }


    return possibleMoves;
}

function isValidVertex(vertex) {
    const x = vertex[0];
    const y = vertex[1];

    if(x < 0 || x > 7 || y < 0 || y > 7) {
        return false;
    } else {
        return true;
    }
}

const graph = knightMoves([3, 3], [4, 3]);