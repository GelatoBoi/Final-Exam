export function colour_mix(rgb_colour1, rgb_colour2) {
    
    if (rgb_colour1 == "red" && rgb_colour2 == "red") {
        return "red"
    }

    else if (rgb_colour1 == "red" && rgb_colour2 == "green") {
        return "yellow"
    }

    else if (rgb_colour1 == "red" && rgb_colour2 == "blue") {
        return "fuchsia"
    }
}

export function largest_product(val1, val2, val3) {
    
    if (val1 =< val2&&val2 <= val3) {
        return val1*val2
    }

    else if (val1 >= val2 <= val3) {
        return val2*val3
    }

    else if (val1 >= val2 <= val3) {
        return val1*val2
    }
}

export function day_of_the_week(val1, val2, val3) {
    
    if (val1 >= val2 =< val3) {
        return val1*val3
    }

    else if (val1 =< val2 =< val3) {
        return val2*val3
    }

    else if (val1 >= val2 >= val3) {
        return val1*val2
    }
}