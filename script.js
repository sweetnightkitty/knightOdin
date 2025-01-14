function knightMoves(start, end) {

    return {
        // isValidVertex: function(vertex) {} - to check if vertex is in board
        
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

const graph = knightMoves([3, 3]);
console.log(graph.possibleMoves([3, 3]));