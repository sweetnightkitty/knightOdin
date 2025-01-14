function knightMoves(start, end) {
    if(!isValidVertex(start)) {
        throw new Error("Start vertex exceeds the game board.");
    }

    if(!isValidVertex(end)) {
        throw new Error("End vertex exceeds the game board.");
    }

    return {
        
        possibleMoves: function(vertex) {
            const x = vertex[0];
            const y = vertex[1];
            const possibleMoves = [];

            let a = x - 2;
            let b = y + 1;

            if(x > 0 && x < 8 && y > 0 && y < 8) {
                possibleMoves.push([a, b], [b, a]);
            }

            a = x - 2;
            b = y - 1;
            if(x > 0 && x < 8 && y > 0 && y < 8) {
                possibleMoves.push([a, b], [b, a]);
            };

            a = x - 1;
            b = y - 2;
            if(x > 0 && x < 8 && y > 0 && y < 8) {
                possibleMoves.push([a, b], [b, a]);
            }

            a = x + 2;
            b = y + 1;
            if(x > 0 && x < 8 && y > 0 && y < 8) {
                possibleMoves.push([a, b], [b, a]);
            }

            return possibleMoves;
        }
    }
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
console.log(graph.possibleMoves([3, 3]));