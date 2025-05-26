// Copyright 2016 Alibaba Cloud All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { createInterface } from 'readline';

class ExampleApp {
    constructor() {
        // Add your example code here
    }

    async main() {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try {
            await this.runExample();
            rl.close();
        } catch (error) {
            console.error(error);
            rl.close();
        }
    }

    runExample() {
        // Add your example code here

        console.log("This is the main method.");
    }
}

export default new ExampleApp();
