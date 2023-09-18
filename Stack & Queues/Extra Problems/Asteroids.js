/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
*/

var asteroidCollision = function (asteroids) {
    let stack = []; 
    for(let i = 0; i < asteroids.length; i++){ 
            let asteroid = asteroids[i]; 
        if(asteroid > 0){ 
            stack.push(asteroid); 
        }else{ 
            // negative value (opposite direction)

            //If top of stack is positive and any smaller value comes, just ignore bcz it
            // will be self destroyed as per asteroid case
            while(stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)){ 
                // If top of stack is positive and incoming item is large --> destroy the top item
                stack.pop(); 
            }   
            if(stack.length === 0 || stack[stack.length - 1] < 0){ 
              // If at top of stack is negative or empty no matter what comes. just push bcz if 
              // negative come it will be in same direction which wont collide and if 
              // positive then on different direction then also not collide3 
              // let say top was -5 and incoming was -15; direction <-,<- wont collide if incomig was 10, <-,-> 
              stack.push(asteroid); 
            }else if(stack[stack.length - 1] === Math.abs(asteroid)){ 
              // If top of asteroid is positive and same value item comes, destroy both
              stack.pop(); 
            } 
        } 
    } 
    return stack;    
};

console.log(asteroidCollision([10, -1, -15]));
