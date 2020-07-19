# Fake-rest-api Module

Fake-rest-api module consists of integrated methods which can communicate to fakerestapi 
(https://fakerestapi.azurewebsites.net/swagger/ui/index#/) application and return expected results. 
Module has controller methods exposed for below modules:
 Books, Authors, Activities, Users, CoverPhotos.

# Configuration

Example for integrating Books Module
```
// ...
import FakeRestAPIModule = require("dr-fakerestapi-module");

class BookService {
    private FakeRestAPIModule: any;

    constructor() {
        this.booksModule = new FakeRestAPIModule.BookController();
    }
}

// ...
```



