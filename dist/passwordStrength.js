"use strict";
;
// Object to check password strengths and various properties
class PasswordCheckService {
    constructor() {
        // Regex to check for a common password string - all based on 5+ length passwords
        this.commonPasswordPatterns = /passw.*|12345.*|09876.*|qwert.*|asdfg.*|zxcvb.*|footb.*|baseb.*|drago.*/;
    }
    // Expected length of all passwords
    static get MinimumLength() {
        return 5;
    }
    //
    // Checks if the given password matches a set of common password
    //
    isPasswordCommon(password) {
        return this.commonPasswordPatterns.test(password);
    }
    //
    // Returns the strength of the current password
    //
    checkPasswordStrength(password) {
        // Build up the strenth of our password
        let numberOfElements = 0;
        numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements; // Lowercase letters
        numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements; // Uppercase letters
        numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements; // Numbers
        numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements; // Special characters (inc. space)
        // Assume we have a poor password already
        let currentPasswordStrength = 0 /* PasswordCheckStrength.Short */;
        // Check then strenth of this password using some simple rules
        if (password === null || password.length < PasswordCheckService.MinimumLength) {
            currentPasswordStrength = 0 /* PasswordCheckStrength.Short */;
        }
        else if (this.isPasswordCommon(password) === true) {
            currentPasswordStrength = 1 /* PasswordCheckStrength.Common */;
        }
        else if (numberOfElements === 0 || numberOfElements === 1 || numberOfElements === 2) {
            currentPasswordStrength = 2 /* PasswordCheckStrength.Weak */;
        }
        else if (numberOfElements === 3) {
            currentPasswordStrength = 3 /* PasswordCheckStrength.Ok */;
        }
        else {
            currentPasswordStrength = 4 /* PasswordCheckStrength.Strong */;
        }
        console.log("Short: " + 0 /* PasswordCheckStrength.Short */); //0
        console.log("Common: " + 1 /* PasswordCheckStrength.Common */); //1
        console.log("Weak: " + 2 /* PasswordCheckStrength.Weak */); //2
        console.log("Ok: " + 3 /* PasswordCheckStrength.Ok */); //3 
        console.log("Strong: " + 4 /* PasswordCheckStrength.Strong */); // 4
        // Return the strength of this password
        return currentPasswordStrength;
    }
}
