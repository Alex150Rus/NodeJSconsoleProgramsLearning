/**
 * Using prompt is relatively straight forward. There are two core methods
 *  you should be aware of: prompt.get() and prompt.addProperties(). 
 * Their methods take strings representing property names in addition to
 *  objects for complex property validation (and more). There are a number of
 *  examples that you should examine for detailed usage.
 */

const prompt = require('prompt');
const colors = require("colors/safe");

prompt.message = colors.rainbow("print your");
prompt.delimiter = colors.green(" ~");

const logpsw = {
    properties: {
      username: {
        description: colors.magenta("What is your name?"),
        required: true,
      },
      email: {
        description: colors.yellow("What is your email?"),
        pattern: /^\S+@\w+\.([a-zA-Z]{2,3})$/,
        message: 'email must match AnyLettersSymbolsWordsDigits@WordsDigits.3lettersMaximum',
        required: true,
      },
      login: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Login must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true,
        replace: '*', 
        required: true
      }
    }
  };

prompt.start();

// Get two properties from the user: username and email
//
prompt.get(logpsw, (err, result) => {
    console.log('Command-line input received:');
    console.log(`  username:  ${result.username}`);
    console.log(`  email: ${result.email}`);
    console.log(`  login: ${result.login}`);
    console.log(`  password: ${result.password}`);
});