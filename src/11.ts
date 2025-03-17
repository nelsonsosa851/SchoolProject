const getRandomTsCode = () => {
  const code = `import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  @Get()
  async findAll(): Promise<User[]> {
    return [];
  }
}

interface User {
  id: number;
  name: string;
}
`;
return code;
};
