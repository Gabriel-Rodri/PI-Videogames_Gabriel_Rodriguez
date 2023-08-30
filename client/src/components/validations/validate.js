function validate(input) {
    let errors = {};

    if (!input.name) {
        errors.name = 'Name is required'
    } else if (!/^[a-zA-Z0-9-() .]+$/.test(input.name)) {
        errors.name = 'Only letters, numbers, hyphens, and parentheses are accepted.'
    }

    if (input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)) {
        errors.image = 'invalid URL'
    }

    if (!input.description) {
        errors.description = 'Description is required';
    } else if (input.description.length > 100) {
        errors.description = 'The description is very long. (Max = 100 characters)';
    } else if (/\s{2,}/.test(input.description)) {
        errors.description = 'The description must not contain successive white spaces.';
    } else if (input.description.length < 10) {
        errors.description = 'The description is very short. (Min = 10 characters)';
    }


    if (!input.released) {
        errors.released = 'The release date is required'
    }

    if (!input.rating) {
        errors.rating = 'The rating is required'
    } else if (input.rating > 5) {
        errors.rating = 'The rating should not be higher than 5'
    } else if (input.rating < 0) {
        errors.rating = 'The rating cannot be a negative number'
    }

    return errors;
}

export default validate;
