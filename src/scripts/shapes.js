const shapeT = [];
const shapeI = [];
const shapeJ = [];
const shapeL = [];
const shapeS = [];
const shapeZ = [];
const shapeO = [];
const shapeTypes = [ shapeT, shapeI, shapeJ, shapeL, shapeS, shapeZ, shapeO ];

/*
  [ ][ ][ ]
     [ ]
*/
shapeT[0] = math.matrix([[0,0,0],
                         [1,1,1],
                         [0,1,0]]);
shapeT[1] = math.matrix([[0,1,0],
                         [1,1,0],
                         [0,1,0]]);
shapeT[2] = math.matrix([[0,1,0],
                         [1,1,1],
                         [0,0,0]]);
shapeT[3] = math.matrix([[0,1,0],
                         [0,1,1],
                         [0,1,0]]);

/*
      [ ]
      [ ]
      [ ]
      [ ]
*/
shapeI[0] = math.matrix([[0,0,0,0],
                         [0,0,0,0],
                         [1,1,1,1],
                         [0,0,0,0]]);
shapeI[1] = math.matrix([[0,1,0,0],
                         [0,1,0,0],
                         [0,1,0,0],
                         [0,1,0,0]]);
shapeI[2] = math.matrix([[0,0,0,0],
                         [1,1,1,1],
                         [0,0,0,0],
                         [0,0,0,0]]);
shapeI[3] = math.matrix([[0,0,1,0],
                         [0,0,1,0],
                         [0,0,1,0],
                         [0,0,1,0]]);

/*
  [ ]
  [ ][ ][ ]
*/
shapeJ[0] = math.matrix([[1,0,0],
                         [1,1,1],
                         [0,0,0]]);
shapeJ[1] = math.matrix([[0,1,1],
                         [0,1,0],
                         [0,1,0]]);
shapeJ[2] = math.matrix([[0,0,0],
                         [1,1,1],
                         [0,0,1]]);
shapeJ[3] = math.matrix([[0,1,0],
                         [0,1,0],
                         [1,1,0]]);

/*
        [ ]
  [ ][ ][ ]
*/
shapeL[0] = math.matrix([[0,0,1],
                         [1,1,1],
                         [0,0,0]]);
shapeL[1] = math.matrix([[0,1,0],
                         [0,1,0],
                         [0,1,1]]);
shapeL[2] = math.matrix([[0,0,0],
                         [1,1,1],
                         [1,0,0]]);
shapeL[3] = math.matrix([[1,1,0],
                         [0,1,0],
                         [0,1,0]]);

/*
     [ ][ ]
  [ ][ ]

*/
shapeS[0] = math.matrix([[0,1,1],
                         [1,1,0],
                         [0,0,0]]);
shapeS[1] = math.matrix([[0,1,0],
                         [0,1,1],
                         [0,0,1]]);
shapeS[2] = math.matrix([[0,0,0],
                         [0,1,1],
                         [1,1,0]]);
shapeS[3] = math.matrix([[1,0,0],
                         [1,1,0],
                         [0,1,0]]);

/*
  [ ][ ]
     [ ][ ]

*/
shapeZ[0] = math.matrix([[1,1,0],
                         [0,1,1],
                         [0,0,0]]);
shapeZ[1] = math.matrix([[0,0,1],
                         [0,1,1],
                         [0,1,0]]);
shapeZ[2] = math.matrix([[0,0,0],
                         [1,1,0],
                         [0,1,1]]);
shapeZ[3] = math.matrix([[0,1,0],
                         [1,1,0],
                         [1,0,0]]);

/*
  [ ][ ]
  [ ][ ]
*/
shapeO[0] = math.matrix([[1,1],
                         [1,1]]);
shapeO[1] = math.matrix([[1,1],
                         [1,1]]);
shapeO[2] = math.matrix([[1,1],
                         [1,1]]);
shapeO[3] = math.matrix([[1,1],
                         [1,1]]);
