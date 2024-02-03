import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"


export class CreateTaskDto{
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}