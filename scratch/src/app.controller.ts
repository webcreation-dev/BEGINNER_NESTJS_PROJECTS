import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoot() {
        return "hi there!";
    }
}