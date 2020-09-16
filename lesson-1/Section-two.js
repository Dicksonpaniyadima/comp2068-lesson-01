//Debugging ang troubleshooting
try {
    console.log("hey i still output")
    const age = 41;
    // debugger;   
    age = 35;

    if (age > 25) {
        throw new Error('Todd you are so old.');
    }
} catch (error) {
    console.log(error.message)  ;
    console.log("Told you idiot");
} finally {
    console.log("Todd You're an idiot");
}

