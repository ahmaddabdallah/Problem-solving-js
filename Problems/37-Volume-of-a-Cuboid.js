/* Volume of a Cuboid */

/* 
    Volume of a Cuboid
    
    Description:
    ------------
    Bob needs a fast way to calculate the volume of a cuboid with three values:
    the length, width and height of the cuboid. Write a function to help Bob with this calculation.
    
    Input: Three numbers representing length, width, and height
    Output: The volume of the cuboid (length * width * height)
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

console.log(Kata.getVolumeOfCuboid(1, 2, 36)); //
