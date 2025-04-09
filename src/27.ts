// 项目文件结构示例：
// src
//   app.ts
//   model.ts
//   controller.ts
//   services.js
//   router.ts

import { Model } from 'model';
import { Controller } from 'controller';
import { Service } from 'services';

const app = new Model('app');
const controller = new Controller(app, Service);
