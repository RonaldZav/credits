# GENERAL USE GUIDE

```js
const { saveCredits, showCredits } = require("@ronaldzav/credits");
// Import the library

saveCredits("Your custom text") 
// Save the credits in the cc variable of your package.json
// After saving the credits you can remove this line from your code.

showCredits() 
// It will show the credits when this function is called.
```

When you start the application, the credits will be displayed automatically without the need to call any function, you just have to keep this line within your code:

```js
const libc = require("@ronaldzav/credits");
```

If you want to disable the credits from being displayed when starting the application, you can set the `arc` variable to `false` within your package.json.

```json
{
    "arc": false
}
```
