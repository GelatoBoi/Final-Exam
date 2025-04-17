import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function Question1(){
    return <colour_mix>
    
        let return = [];

        if (colour_mix(red, blue)) {
            expect(colour_mix).toBe("fuchsia");
            return.push("fuchsia");

        });

        if (colour_mix(red, green)) {
            expect(colour_mix).toBe("yellow");
            return.push("yellow");

        });

        if (colour_mix(green, blue)) {
            expect(colour_mix).toBe("aqua");
            return.push("aqua");

        });


        if (colour_mix(red, red)) {
            expect(colour_mix).toBe("red");
            return.push("red");

        });


        if (colour_mix(blue, blue)) {
            expect(colour_mix).toBe("blue");
            return.push("blue");

        });

        if (colour_mix(green, green)) {
            expect(colour_mix).toBe("green");
            return.push("green");

        });
        
        else {
            return.push("Error");
        }
        

    </colour_mix>;
    
}

function Question2(){
    return <largest_product> 
        
        let value = largest_product(20, 50, 70);
        expect(value).toBe("3500");

        let value = largest_product(60, 30, 20);
        expect(value).toBe("1800");

        let value = largest_product(80, 30, 100);
        expect(value).toBe("8000");
        
    </largest_product>;
    
}

function Question3(){
    return <day_of_the_week> 

        let return = [];
        
        if (day_of_the_week(1)) {
            expect(day_of_the_week).toBe("Sunday");
            return.push("Sunday");

        }    

        if (day_of_the_week(2)) {
            expect(day_of_the_week).toBe("Monday");
            return.push("Monday");

        }   

        if (day_of_the_week(3)) {
            expect(day_of_the_week).toBe("Tuesday");
            return.push("Tuesday");

        }    

        if (day_of_the_week(4)) {
            expect(day_of_the_week).toBe("Wednesday");
            return.push("Wednesday");

        }     

        if (day_of_the_week(5)) {
            expect(day_of_the_week).toBe("Thursday");
            return.push("Thursday");

        }    

        if (day_of_the_week(6)) {
            expect(day_of_the_week).toBe("Friday");
            return.push("Friday");

        }    

        if (day_of_the_week(7)) {
            expect(day_of_the_week).toBe("Saturday");
            return.push("Saturday");

        }  

        else {
            return.push("Error");
        } 
        
    </day_of_the_week>;
    
}

function Question4(){
    return <pay_raise> 

        let return = [];
        
        if (day_of_the_week(1)) {
            expect(day_of_the_week).toBe("Sunday");
            return.push("Sunday");

        }    
        
        
    </pay_raise>;
    
}

function Question5(){
    return <is_leap> 

        if (is_leap(year/4)) {
            expect(is_leap).toBe("True");

        });

        if (is_leap(year/4)) {
            expect(is_leap).toBe("True");

        });
        
        
    </is_leap>;
    
}

export {Question1, Question2, Question3, Question4, Question5}